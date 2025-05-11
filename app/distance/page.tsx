"use client";
import PlanetImage from "@/app/components/PlanetImage";
import { moon_and_planets } from "@/app/data/data";
import Image from "next/image";
import { useEffect, useState } from "react";
import AnimatedNumber from "../components/AnimatedNumber";
import AnimatedPlanet from "../components/AnimatedPlanet";

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
    const [distance, setDistance] = useState<number>(0)

    function updatePlanet(planet: PlanetObject) {
        setPlanet(planet)
    }

    useEffect(() => {
        async function getPlanetData() {
            await fetch(`http://localhost:3000/api/planet/${planet.id}`).then(res => res.json())
                .then((data) => {
                    setDistance(data)
                })
                .catch((error) => {
                    console.log(error)
                })
        }

        getPlanetData();

    }, [planet])


    return (
        <section className="h-[calc(100vh-192px)] flex flex-col justify-between items-center">

            <div className="flex justify-between items-center w-full">
                <Image src={"/Sol.png"} className="drop-shadow-[0_0_30px_rgba(250,168,7,0.6)]" width={500} height={500} alt="Sol" />
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl">Sol - {planet.name}</h1>
                    <p className="text-[10px]">*Proporções apenas para Planetas/Terra</p>
                    <AnimatedNumber value={distance * 1000} />
                </div>
                <AnimatedPlanet key={planet.name} planet={planet} />
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
