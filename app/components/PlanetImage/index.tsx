import Image from "next/image";
import { PlanetInfo } from "../PlanetInfo";


interface PlanetImageProps {
    data: PlanetInfo
    updatePlanet: (data: PlanetInfo) => void
}

export default function PlanetImage({ data, updatePlanet }: PlanetImageProps) {


    return (
        <Image
            src={`/${data.name}.png`}
            alt={data.name}
            width={50}
            height={50}
            className="hover:scale-[1.1] duration-300 cursor-pointer drop-shadow-[6px_5px_8px_rgba(0,0,0,0.4)]"
            onClick={() => updatePlanet(data)}
        />
    )
}