import { NextResponse } from "next/server";
import { GeoMoon } from "astronomy-engine";

export async function GET(request: Request, {params}: {params: {id: string}}) {
    console.log(GeoMoon(new Date()))
}