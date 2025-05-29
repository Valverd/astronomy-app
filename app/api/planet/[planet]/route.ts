import { NextResponse, NextRequest } from "next/server";
import { Body, HelioVector } from "astronomy-engine";

export async function GET(request: NextRequest, context: { params: { planet: string } }) {

    const { planet } = context.params

    if (!planet) return NextResponse.json({ error: "Planeta Inválido" }, { status: 404 })

    // Body é um Enum, então ao adicionar o keyof estou dizendo para pegar a chave do tipo Enum Body, no caso "Mars" | "Venus" | "Saturn", etc.
    // Body[params.id as keyof typeof Body]
    const planet_distance = HelioVector(Body[planet as keyof typeof Body], new Date())

    const AU_distance = Math.sqrt((planet_distance.x ** 2 + planet_distance.y ** 2 + planet_distance.z ** 2))

    const KM_distance = AU_distance * 149_597_870.7

    return NextResponse.json(KM_distance / 1000)
}