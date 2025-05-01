import { PlanetObject } from "../PlanetInfo"

interface RangeProps {
    planet: PlanetObject
}

export default function Range({planet} : RangeProps) {
    return (
        <input type="range" className={`${planet.id}`} min={planet.min * 1000} max={planet.max * 1000} disabled/>
    )
}