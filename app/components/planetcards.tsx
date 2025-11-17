"use client";
import { useState } from "react";

export default function PlanetCards() {

    type PlanetCard = {
        name: string;
        image: string;
        description: string;
        typeImage: string;
        type: string;
        size: string;
        difficulty: string;
        dayCycle: string;
        mineralImages?: string[];
        gasImages?: string[];
        solarPercentage: string;
        windPercentage: string;
    }

    let planetCards: PlanetCard[] = [
        {
            name: "Sylva",
            image: "./planets/Sylva.png",
            description: "Average Atmosphere, Temperate, Pleasant",
            typeImage: "./icons/Icon_Sylva.png",
            type: "Terran",
            size: "Medium",
            difficulty: "Easy",
            dayCycle: "12 Mins",
            mineralImages: ["./icons/Icon_Sphalerite.png", "./icons/Icon_Malachite.png"],
            gasImages: ["./icons/Icon_Hydrogen.png", "./icons/Icon_Nitrogen.png"],
            solarPercentage: "100%",
            windPercentage: "48%"
        },
        {
            name: "Desolo",
            image: "./planets/Desolo.png",
            description: "No Atmosphere, Bare Rock, Pockmarked",
            typeImage: "./icons/Icon_Desolo.png",
            type: "Terran Moon",
            size: "Small",
            difficulty: "Easy",
            dayCycle: "2 Mins",
            mineralImages: ["./icons/Icon_Wolframite.png", "./icons/Icon_Sphalerite.png"],
            solarPercentage: "150%",
            windPercentage: "25%"
        },
        {
            name: "Calidor",
            image: "./planets/Calidor.png",
            description: "Average Atmosphere, Sun-Blasted, Dry",
            typeImage: "./icons/Icon_Calidor.png",
            type: "Arid",
            size: "Medium",
            difficulty: "Medium",
            dayCycle: "13.5 Mins",
            mineralImages: ["./icons/Icon_Malachite.png", "./icons/Icon_Wolframite.png"],
            gasImages: ["./icons/Icon_Hydrogen.png", "./icons/Icon_Sulfur.png"],
            solarPercentage: "175%",
            windPercentage: "40%"
        },
        {
            name: "Vesania",
            image: "./planets/Vesania.png",
            description: "Thick Atmosphere, Lush, Unusual Landscape",
            typeImage: "./icons/Icon_Vesania.png",
            type: "Exotic",
            size: "Medium",
            difficulty: "Medium",
            dayCycle: "13.5 Mins",
            mineralImages: ["./icons/Icon_Lithium.png", "./icons/Icon_Titanite.png"],
            gasImages: ["./icons/Icon_Hydrogen.png", "./icons/Icon_Nitrogen.png", "./icons/Icon_Argon.png"],
            solarPercentage: "50%",
            windPercentage: "56%"
        },
        {
            name: "Novus",
            image: "./planets/Novus.png",
            description: "Thin Atmosphere, Forested, Cratered",
            typeImage: "./icons/Icon_Novus.png",
            type: "Exotic Moon",
            size: "Small",
            difficulty: "Medium",
            dayCycle: "3.5 Mins",
            mineralImages: ["./icons/Icon_Hematite.png", "./icons/Icon_Lithium.png"],
            gasImages: ["./icons/Icon_Hydrogen.png", "./icons/Icon_Methane.png"],
            solarPercentage: "150%",
            windPercentage: "58%"
        },
        {
            name: "Glacio",
            image: "./planets/Glacio.png",
            description: "Thin Atmosphere, Windswept, Icy Mountains",
            typeImage: "./icons/Icon_Glacio.png",
            type: "Tundra",
            size: "Medium",
            difficulty: "Hard",
            dayCycle: "20 Mins",
            mineralImages: ["./icons/Icon_Titanite.png", "./icons/Icon_Hematite.png"],
            gasImages: ["./icons/Icon_Argon.png"],
            solarPercentage: "25%",
            windPercentage: "56%"
        },
        {
            name: "Atrox",
            image: "./planets/Atrox.png",
            description: "Choked Atmosphere, Aggressive Flora, Treacherous Terrain",
            typeImage: "./icons/Icon_Atrox.png",
            type: "Radiated",
            size: "Medium",
            difficulty: "Very Hard",
            dayCycle: "20 Mins",
            gasImages: ["./icons/Icon_Helium.png", "./icons/Icon_Methane.png", "./icons/Icon_Nitrogen.png", "./icons/Icon_Sulfur.png"],
            solarPercentage: "50%",
            windPercentage: "25%"
        }
    ];

    const [selectedPlanetIndex, setSelectedPlanetIndex] = useState<number | null>(null);

    const handlePlanetCardClick = (index: number) => {
        setSelectedPlanetIndex(prev => prev === index ? null : index);
    }

    return (
        <div className="absolute top-0 left-0 flex flex-col justify-center items-center h-full w-screen overflow-hidden pointer-events-none">
            { planetCards.map((planet, index) => (
                <div key={index} onClick={() => handlePlanetCardClick(index)} 
                className={`absolute w-65 h-90 rounded-2xl cursor-pointer bg-center bg-cover overflow-hidden group pointer-events-auto text-center origin-bottom-left -translate-x-[75%] transition-all duration-500 
                    ${selectedPlanetIndex === index ? "z-20 scale-125 translate-y-0 rotate-0 " : "origin-bottom-left hover:-translate-y-5 hover:scale-105"}`}
                    style={{ 
                        backgroundImage: `url(${planet.image})`, 
                        rotate: selectedPlanetIndex === index ? "0deg" : `${-15 + index * 5}deg`,
                        left: selectedPlanetIndex === index ? "50%" : `calc(50% + ${index * 20}px)`,
                    }}
                >
                    <div className={`bg-black absolute inset-0  transition-opacity duration-500 ${selectedPlanetIndex === index ? "opacity-60" : "opacity-80 group-hover:opacity-60"}`}/>
                    <div className={`absolute top-0 w-full p-1 text-xl text-center px-[5%] h-10 flex flex-row justify-between items-center gap-3 flex-wrap overflow-hidden transition-colors duration-500 ${selectedPlanetIndex === index ? "bg-sky-600" : "bg-sky-600/70 group-hover:bg-sky-600"}`}>
                        <div className="flex flex-row gap-2">
                            <img src={planet.typeImage}/>
                            {planet.name}
                        </div>
                        <div className="flex flex-row gap-1 flex-shrink-0 overflow-hidden">
                            {planet.mineralImages?.map((mineralImage, mineralIndex) => (
                                <img key={mineralIndex} src={mineralImage}/>
                            ))}
                            {planet.gasImages?.map((gasImage, gasIndex) => (
                                <img key={gasIndex} src={gasImage}/>
                            ))}
                        </div>
                    </div>
                    <div className="absolute text-base px-5 top-15 w-full flex flex-col gap-1">
                        <div className="flex flex-row justify-between w-full text-sm gap-1 mb-3">
                            {planet.description}
                        </div>
                        <div className="flex flex-row justify-between w-full gap-1">
                            <div>Type:</div>
                            <div className="flex flex-row gap-1"><img src={planet.typeImage} className="h-[24px]"/>{planet.type}</div>
                        </div>
                        <div className="flex flex-row justify-between w-full gap-1">
                            <div>Size:</div> 
                            <div className="flex flex-row gap-1">{planet.size}</div>
                        </div>
                        <div className="flex flex-row justify-between w-full gap-1">
                            <div>Difficulty:</div>
                            <div className="flex flex-row gap-1">{planet.difficulty}</div>
                        </div>
                        <div className="flex flex-row justify-between w-full gap-1">
                            <div>Day Cycle:</div>
                            <div className="flex flex-row gap-1">{planet.dayCycle}</div>
                        </div>
                        <div className="flex flex-row justify-between w-full gap-1">
                            <div>Minerals:</div>
                            <div className="flex flex-row gap-1">
                                {planet.mineralImages?.map((mineralImage, mineralIndex) => (
                                    <img key={mineralIndex} src={mineralImage} className="h-[20px]"/>
                                ))}
                                {!planet.mineralImages? "None" : null}
                            </div>
                        </div>
                        <div className="flex flex-row justify-between w-full gap-1">
                            <div>Gasses:</div>
                            <div className="flex flex-row gap-1">
                                {planet.gasImages?.map((gasImage, gasIndex) => (
                                    <img key={gasIndex} src={gasImage} className="h-[20px]"/>
                                ))}
                                {!planet.gasImages? "None" : null}
                            </div>
                        </div>
                        <div className="flex flex-row justify-between w-full gap-1">
                            <div>Solar:</div>
                            <div className="flex flex-row gap-1">{planet.solarPercentage}</div>
                        </div>
                        <div className="flex flex-row justify-between w-full gap-1">
                            <div>Wind:</div>
                            <div className="flex flex-row gap-1">{planet.windPercentage}</div>
                        </div>
                    </div>
                </div>
            ))

            }
        </div>
    )
}