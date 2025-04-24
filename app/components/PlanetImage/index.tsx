import Image from "next/image";


interface PlanetImageProps {
    name: string
    updatePlanet: (data: string) => void
}

export default function PlanetImage({ name, updatePlanet }: PlanetImageProps) {


    return (
        <Image
            src={`/${name}.png`}
            alt={name}
            width={50}
            height={50}
            className="hover:scale-[1.1] duration-300 cursor-pointer drop-shadow-[6px_5px_8px_rgba(0,0,0,0.4)]"
            onClick={() => updatePlanet(name)}
        />
    )
}