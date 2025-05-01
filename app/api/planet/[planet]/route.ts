import { NextResponse } from "next/server";
import { GeoVector, Body } from "astronomy-engine";

export async function GET(request: Request, { params }: { params: { planet: string } }) {
    const { planet } = await params
    const formatted_planet = planet.charAt(0).toUpperCase() + planet.slice(1)

    // Body é um Enum, então ao adicionar o keyof estou dizendo para pegar a chave do tipo Enum Body, no caso "Mars" | "Venus" | "Saturn", etc.
    // Body[params.id as keyof typeof Body]
    const planet_distance = GeoVector(Body[formatted_planet as keyof typeof Body], new Date(), true)

    const AU_distance = Math.sqrt((planet_distance.x ** 2 + planet_distance.y ** 2 + planet_distance.z ** 2))

    const KM_distance = AU_distance * 149_597_870.7

    return NextResponse.json(KM_distance / 1000)
}