import Image from "next/image";
import { PlanetObject } from "@/app/page";

interface PlanetImageProps {
    planet: PlanetObject
    updatePlanet: (planet: PlanetObject) => void
}

export default function PlanetImage({ planet, updatePlanet }: PlanetImageProps) {

    return (
        <Image
            src={`/${planet.id}.png`}
            alt={planet.id}
            width={50}
            height={50}
            className="hover:scale-[1.1] duration-300 cursor-pointer drop-shadow-[6px_5px_8px_rgba(0,0,0,0.4)]"
            onClick={() => updatePlanet(planet)}
        />
    )
}