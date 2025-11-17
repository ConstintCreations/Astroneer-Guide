"use client";
import { useState, useEffect, useRef } from "react";

export default function Stars() {
    const popSound = typeof window !== "undefined" ? new Audio("./sounds/pop.mp3") : null;
    function playPopSound() {
        if (popSound === null) return;
        popSound.currentTime = 0;
        popSound.play();
    }

    let brightnessLevels = {
        500: "bg-gray-500",
        600: "bg-gray-600",
        700: "bg-gray-700",
    }

    type Star = { id: number; x: number; y: number; size: number; brightness: number; active: boolean; };

    type Line = { id:number; from: {x: number, y: number}; to: {x: number, y: number}, length: number, angle: number };

    const [lines, setLines] = useState<Line[]>([]);

    const [stars, setStars] = useState<Star[]>([]);
    const [lastHoveredStar, setLastHoveredStar] = useState<number | null>(null);

    useEffect(() => {
        const generatedStars: Star[] = Array.from({ length: 300 }).map((_, index) => ({
            id: index,
            x: Math.random() * 96 + 2,
            y: Math.random() * 96 + 2,
            size: Math.random() * 1.5 + 0.75,
            brightness: 100*Math.floor(Math.random() * 2) + 500,
            active: false
        }));
        setStars(generatedStars);
    }, []);

    const handleStarHover = (hoverId: number) => {
        
        if (lastHoveredStar !== null && lastHoveredStar !== hoverId) {
            const lastStar = stars.find(star => star.id === lastHoveredStar)!;
            const currentStar = stars.find(star => star.id === hoverId)!;
            if (lastStar && currentStar) addLine(lastStar, currentStar);
        };
        setLastHoveredStar(hoverId);

        setStars(prev =>  
            prev.map(star => {
                if (star.id === hoverId || star.active) return { ...star, active: true };
                return star;
            })
        )
    };

    const handleStarLeave = (outId: number) => {
        setStars(prevStars => 
            prevStars.map(star => star.id === outId ? { ...star, active: false } : star)
        );
    }

    const containerRef = useRef<HTMLDivElement>(null);

    const addLine = (fromStar: Star, toStar: Star) => {
        const id = Date.now();

        const containerWidth = containerRef.current?.offsetWidth ?? window.innerWidth;
        const containerHeight = containerRef.current?.offsetHeight ?? window.innerHeight;
        
        const dx = (toStar.x - fromStar.x) / 100 * containerWidth;
        const dy = (toStar.y - fromStar.y) / 100 * containerHeight;

        const length = Math.hypot(dx, dy);
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        
        setLines(prevLines => [...prevLines, { id, from: { x: fromStar.x, y: fromStar.y }, to: { x: toStar.x, y: toStar.y }, length, angle }]);

        setTimeout(() => {
            setLines(prevLines => prevLines.filter(line => line.id !== id));
        }, 7000);
    }

    return (
        <div ref={containerRef} className="relative top-0 left-0 flex flex-col justify-center items-center h-full w-screen overflow-hidden">

            { lines.map((line) => (
                <div key={line.id} className="absolute bg-gray-200 h-1 rounded-full" style={{
                    top: `${line.from.y}%`,
                    left: `${line.from.x}%`,
                    width: `${line.length}px`,
                    transform: `rotate(${line.angle}deg)`,
                    transformOrigin: `0% 0%`,
                    animation: `fadeStarLineOut 7s forwards ease-in`
                }}/>
            ))                
            }

            {stars.map((star) => (
                <div key={star.id} onMouseEnter={() => handleStarHover(star.id)} onMouseLeave={() => handleStarLeave(star.id)} className={`${star.active ? "bg-white duration-0" : `${brightnessLevels[star.brightness as 500 | 600 | 700]} duration-2000`} absolute rounded-full w-1.5 h-1.5 transition-colors ease-in-out`} style={{ top: `${star.y}%`, left: `${star.x}%`, transform: `scale(${star.size}) translate(-50%, -50%)`}} />
            ))
            }
            
        </div>
    )
}