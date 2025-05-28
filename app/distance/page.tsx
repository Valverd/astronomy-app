"use client";
import { moon_and_planets } from "@/app/data/data";
import Image from "next/image";
import { useEffect, useState } from "react";
import AnimatedNumber from "../components/AnimatedNumber";
import AnimatedPlanet from "../components/AnimatedPlanet";
import PlanetsBar from "../components/PlanetsBar";

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
        <section className="flex flex-col justify-between items-center gap-10">

            <div className="flex mb-14 flex-col justify-between items-center gap-14 w-full xl:flex-row">
                <Image src={"/Sun.png"} className="drop-shadow-[0_0_30px_rgba(250,168,7,0.6)]" width={500} height={500} alt="Sol" />
                <div className="md:text-start md:text-2xl text-center flex flex-col gap-2">
                    <h1>Sol - {planet.name}</h1>
                    <AnimatedNumber value={distance * 1000} />
                    <p className="text-xs">*Proporções apenas para Planetas/Terra</p>
                </div>
                <AnimatedPlanet key={planet.name} planet={planet} />
            </div>

            <div
                className="flex w-full md:gap-0 md:w-xl p-4 rounded-full bg-bar backdrop-blur-xs shadow-bar overflow-hidden"
            >
                <PlanetsBar updatePlanet={updatePlanet} />
            </div>

        </section>
    );
}
