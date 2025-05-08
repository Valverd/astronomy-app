import { useEffect, useState } from "react"
import { PlanetObject } from "../PlanetInfo"

interface RangeProps {
    planet: PlanetObject
}

export default function Range({ planet }: RangeProps) {

    const [distance, setDistance] = useState<number>(0)

    
    
    useEffect(() => {
        fetch(`http://localhost:3000/api/planet/${planet.id}`).then((res) => {
            res.json().then((data) => {
                setDistance(data)
                console.log("Distância: ", data )
                console.log("Min: ", planet.min / 1000)
                console.log("Max: ", planet.max / 1000)
            })
        })
    }, [planet])


    return (
        <input type="range" className={`${planet.id}`} min={planet.min} max={planet.max} disabled value={distance * 1000}/>
    )
}