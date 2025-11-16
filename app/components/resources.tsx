"use client";
import { useState } from "react";

export default function Resources() {

    type NaturalResource = {
        name: string;
        icon: string;
        planetIcons?: string[];
    }

    let naturalResources: NaturalResource[] = [
        {
            name: "Soil",
            icon: "/icons/Icon_Soil.png"
        },
        {
            name: "Organic",
            icon: "/icons/Icon_Organic.png"
        },
        {
            name: "Compound",
            icon: "/icons/Icon_Compound.png"
        },
        {
            name: "Resin",
            icon: "/icons/Icon_Resin.png"
        },
        {
            name: "Clay",
            icon: "/icons/Icon_Clay.png"
        },
        {
            name: "Quartz",
            icon: "/icons/Icon_Quartz.png"
        },
        {
            name: "Ammonium",
            icon: "/icons/Icon_Ammonium.png"
        },
        {
            name: "Graphite",
            icon: "/icons/Icon_Graphite.png"
        },
        {
            name: "Laterite",
            icon: "/icons/Icon_Laterite.png"
        },
        {
            name: "Astronium",
            icon: "/icons/Icon_Astronium.png"
        },
        {
            name: "Sphalerite",
            icon: "/icons/Icon_Sphalerite.png",
            planetIcons: ["/icons/Icon_Sylva.png", "/icons/Icon_Desolo.png"]
        },
        {
            name: "Wolframite",
            icon: "/icons/Icon_Wolframite.png",
            planetIcons: ["/icons/Icon_Desolo.png", "/icons/Icon_Calidor.png"]
        },
        {
            name: "Malachite",
            icon: "/icons/Icon_Malachite.png",
            planetIcons: ["/icons/Icon_Sylva.png", "/icons/Icon_Calidor.png"]
        },
        {
            name: "Lithium",
            icon: "/icons/Icon_Lithium.png",
            planetIcons: ["/icons/Icon_Vesania.png", "/icons/Icon_Novus.png"]
        },
        {
            name: "Hematite",
            icon: "/icons/Icon_Hematite.png",
            planetIcons: ["/icons/Icon_Novus.png", "/icons/Icon_Glacio.png"]
        },{
            name: "Titanite",
            icon: "/icons/Icon_Sphalerite.png",
            planetIcons: ["/icons/Icon_Vesania.png", "/icons/Icon_Glacio.png"]
        }
    ];

    const [showResourceMenu, setShowResourceMenu] = useState(true);
    const [showPage, setShowPage] = useState("Drill");

    return (
        <div>
            <div className={`absolute top-0 left-0 flex flex-col justify-center items-center ${showResourceMenu ? "h-full w-screen" : "opacity-0"} overflow-hidden`}>
                <div className="bg-black/70 h-full w-full absolute top-0 left-0 cursor-pointer" onClick={() => setShowResourceMenu(false)}/>
                <div className="absolute bg-gray-800 w-[80%] h-[80%] rounded-4xl overflow-hidden flex flex-col">
                    <div className="bg-sky-600 w-full p-5 flex h-25 flex-row justify-between pr-10"><div>Resources</div><div className="cursor-pointer" onClick={() => setShowResourceMenu(false)}>X</div></div>
                    <div className="flex flex-row flex-1">
                        <div className="bg-gray-900 text-center flex flex-col justify-center items-center p-5 gap-3 overflow-y-auto">
                            <img src="/icons/Icon_Drill.png" className="w-16 mt-5 mb-5 mx-auto cursor-pointer" onClick={() => setShowPage("Drill")}/>
                            <img src="/icons/Icon_Atmospheric_Condenser.png" className="w-16 mt-5 mb-5 mx-auto cursor-pointer" onClick={() => setShowPage("Gas")}/>
                            <img src="/icons/Icon_Smelting_Furnace.png" className="w-16 mt-5 mb-5 mx-auto cursor-pointer" onClick={() => setShowPage("Smelt")}/>
                            <img src="/icons/Icon_Chemistry_Lab.png" className="w-16 mt-5 mb-5 mx-auto cursor-pointer" onClick={() => setShowPage("Lab")}/>
                        </div>
                        <div className="flex-1 bg-gray-700 p-10 overflow-y-auto">
                            {showPage === "Drill" && (
                                <div>
                                    <h1 className="text-4xl mb-5">Natural Resources</h1>
                                    <div className="flex flex-row flex-wrap gap-5">
                                        {naturalResources.map((resource, index) => (
                                            <div key={index} className="flex flex-row gap-3 bg-gray-900 rounded-lg justify-center items-center p-3 cursor-pointer hover:bg-sky-700 transition-colors duration-500">
                                                <img src={resource.icon} className="w-8 h-8"/>
                                                <p className="text-center text-4xl">{resource.name}</p>
                                                {resource.planetIcons ? 
                                                
                                                <div className="flex flex-row gap-1 text-4xl items-center">
                                                    <div>(</div>
                                                    {resource.planetIcons.map((planetIcon, pIndex) => (
                                                        <img key={pIndex} src={planetIcon} className="w-6 h-6"/>
                                                    ))}
                                                    <div>)</div>
                                                </div>
                                                
                                                : ""}
                                            </div>
                                        ))
                                        }
                                    </div>
                                </div>
                            )}
                            {showPage === "Gas" && (
                                <div>
                                    <h1 className="text-4xl mb-5">Atmospheric Condenser</h1>
                                </div>
                            )}
                            {showPage === "Smelt" && (
                                <div>
                                    <h1 className="text-4xl mb-5">Smelting Furnace</h1>
                                </div>
                            )}
                            {showPage === "Lab" && (
                                <div>
                                    <h1 className="text-4xl mb-5">Chemistry Lab</h1>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <img onClick={() => setShowResourceMenu(!showResourceMenu)} src="/icons/Icon_Auto_Extractor.png" className="absolute top-10 left-10 scale-125 cursor-pointer"/>
        </div>
    )
}