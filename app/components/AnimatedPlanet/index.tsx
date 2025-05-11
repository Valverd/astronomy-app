"use client";
import { PlanetObject } from "@/app/page";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface AnimatedPlanetProps {
    planet: PlanetObject;
}

function astroSize(planet : string){
    const sizes = {
        Mercury: 0.38,
        Venus: 0.95,
        Earth: 1,
        Mars: 0.53,
        Jupiter: 10.97,
        Saturn: 9.14,
        Uranus: 3.98,
        Neptune: 3.86,
    }

    return sizes[planet as keyof typeof sizes]
}

export default function AnimatedPlanet({ planet }: AnimatedPlanetProps) {

    return (
        <motion.span
            initial={{ scale: 0.5 }}
            animate={{ scale: 1  }}
            transition={{
                type: "spring",
                duration: 1
            }}
        >
            <Image src={`/${planet.name}.png`} width={20 * astroSize(planet.id)} height={20 * astroSize(planet.id)} alt={`${planet.name}`} className="drop-shadow-[1px_1px_20px_rgba(0,0,0,0.70)] m-4" />
        </motion.span>
    );
}
