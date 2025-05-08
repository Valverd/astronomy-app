"use client";
import PlanetImage from "@/app/components/PlanetImage";
import { moon_and_planets } from "@/app/data/data";
import Image from "next/image";
import { useState } from "react";

export interface PlanetObject {
    name: string;
    description: string;
    topics: Array<string>;
    id: string;
    type: string;
    min: number;
    max: number;
}

export default function Distance() {
    const [planet, setPlanet] = useState<PlanetObject>(moon_and_planets[2]);

    function updatePlanet(data: PlanetObject) {
        setPlanet(data);
    }

    return (
        <section className="h-[calc(100vh-176px)] flex flex-col justify-between items-center">

            <div className="flex justify-between items-center w-full">
                <Image src={"/Sol.png"} className="drop-shadow-[0_0_30px_rgba(250,168,7,0.6)]" width={400} height={400} alt="Sol" />
                <Image src={`/${planet.name}.png`} width={50} height={50} alt={`${planet.name}`} />
            </div>

            <div className="flex w-[40%] p-4 justify-around rounded-full bg-[#ffffff15] backdrop-blur-xs shadow-[6px_5px_20px_rgba(0,0,0,0.4)]">
                {moon_and_planets.map((item, i) => {
                    return (
                        <PlanetImage planet={item} updatePlanet={updatePlanet} key={i} />
                    );
                })}
            </div>
        </section>
    );
}
