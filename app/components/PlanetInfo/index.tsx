'use client'
import Image from "next/image"
import PlanetImage from "../PlanetImage"
import { moon_and_planets } from "@/app/data/data"
import { useState } from "react"

export default function PlanteInfo() {

    const [planet, setPlanet] = useState<string>("Earth")

    function updatePlanet(data : string) {
        setPlanet(data)
    }

    return (
        <div className="w-full flex justify-between">
            <div className="w-[30%] flex flex-col gap-12">
                <div>
                    <h1 className="text-indigo-300 font-bold text-4xl mb-2">Terra</h1>
                    <div className="h-px bg-white w-full rounded-lg" />
                </div>
                <p className="text-indigo-100">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
                <div>
                    Distância: 880.000 km
                </div>
            </div>
            <div className="">
                <Image
                    src={`/${planet}.png`}
                    className="drop-shadow-[8px_20px_25px_rgba(0,0,0,0.95)]"
                    alt={planet}
                    width={500}
                    height={500} />
            </div>
            <div className="flex flex-col px-[12px] py-[16px] gap-4 justify-center rounded-full bg-[#ffffff15] backdrop-blur-xs shadow-[6px_5px_20px_rgba(0,0,0,0.4)]">
                {
                    moon_and_planets.map((item) => {
                        return (
                            <PlanetImage name={item} updatePlanet={updatePlanet} />
                        )
                    })
                }
            </div>
        </div>
    )
}