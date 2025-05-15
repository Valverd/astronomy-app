"use client";
import Image from "next/image";
import { moon_and_planets } from "@/app/data/data";
import { useState } from "react";
import PlanetsBar from "./components/PlanetsBar";

export interface PlanetObject {
  name: string;
  description: string;
  topics: Array<string>;
  id: string;
  type: string;
  min: number;
  max: number;
}

export default function Home() {
  const [planet, setPlanet] = useState<PlanetObject>(moon_and_planets[2]);

  function updatePlanet(data: PlanetObject) {
    setPlanet(data);
  }

  return (
    <section className="flex flex-col gap-[100px] justify-center items-center">
      <div className="w-full flex justify-between">
        <div className="w-[30%] flex flex-col gap-8 backdrop-blur-xs bg-[#ffffff15] p-6 rounded-2xl">
          <div>
            <h1 className=" font-bold text-4xl mb-2">
              {planet?.name}
            </h1>
            <hr className="h-px bg-white w-full rounded-lg" />
          </div>
          <p>{planet.description}</p>
          <ul>
            {planet.topics.map((item, i) => {
              let topic_info = item.split(" ");
              let topic_title = topic_info.shift();
              return (
                <li className="my-2" key={i}>
                  <span className="font-bold">{topic_title} </span>
                  {topic_info.join(" ")}
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <Image
            src={`/${planet?.name}.png`}
            className="drop-shadow-[8px_20px_25px_rgba(0,0,0,0.95)]"
            alt={planet?.name || "Imagem sem descrição"}
            width={500}
            height={500}
          />
        </div>
        
        <div className="flex flex-col p-4 h-full gap-4 justify-center rounded-full bg-bar backdrop-blur-xs shadow-bar">
          <PlanetsBar updatePlanet={updatePlanet} />
        </div>

      </div>

    </section>
  );
}
