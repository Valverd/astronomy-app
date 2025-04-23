import Image from "next/image";

export default function PlanetImage() {
    return (
        <Image
            src={'/Earth.png'}
            alt={'Earth'}
            width={60}
            height={60}
        />
    )
}