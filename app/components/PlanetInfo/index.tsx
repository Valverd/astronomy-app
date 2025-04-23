import Image from "next/image"
import PlanetImage from "../PlanetImage"

export default function PlanteInfo() {
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
                    src="/Earth.png"
                    className="drop-shadow-[8px_20px_25px_rgba(0,0,0,0.95)]"
                    alt="Earth"
                    width={500}
                    height={500} />
            </div>
            <div className="flex flex-col p-2 gap-4 justify-center rounded-4xl bg-[#ffffff30] backdrop-blur-xs">
                <PlanetImage />
                <PlanetImage />
                <PlanetImage />
                <PlanetImage />
                <PlanetImage />
                <PlanetImage />
                <PlanetImage />
            </div>
        </div>
    )
}