import { moon_and_planets } from "@/app/data/data";
import PlanetImage from "../PlanetImage";
import { PlanetObject } from "@/app/page";
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from "react";

interface PlanetsBarProps {
    updatePlanet: (updatePlanet: PlanetObject) => void
}

export default function PlanetsBar({ updatePlanet }: PlanetsBarProps) {
    const carousel = useRef<HTMLDivElement>(null)
    const [width, setWidth] = useState<number>(0)

    useEffect(() => {
        if (!carousel.current) return
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)

        const observer = new ResizeObserver(() => setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth))

        observer.observe(carousel.current)

        return () => observer.disconnect()

    }, [carousel])

    return (
        <motion.div
            ref={carousel}
            className="flex w-full justify-around gap-3 md:gap-0 cursor-grab active:cursor-grabbing"
            drag='x'
            dragConstraints={{ right: 0, left: -width }}
        >
            {moon_and_planets.map((item, i) => {
                return (
                    <PlanetImage planet={item} updatePlanet={updatePlanet} key={i} />
                );
            })}
        </motion.div >

    )
}