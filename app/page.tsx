"use client";
import { moon_and_planets } from "@/app/data/data";
import { useState } from "react";
import PlanetsBar from "./components/PlanetsBar";
import PlanetImage from "./components/PlanetImage";
import Astros3D from "./components/Astros3D";

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
    <section className="flex justify-center items-center mb-20">
      <div className="flex flex-col-reverse items-center gap-20 lg:w-full lg:flex-row lg:items-stretch lg:justify-between lg:gap-0">
        <div className="w-full lg:w-[30%] flex flex-col gap-8 backdrop-blur-xs bg-[#ffffff15] p-6 rounded-2xl">
          <div>
            <h1 className=" font-bold text-4xl mb-2">
              {planet.name}
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

        <Astros3D planet={planet.id} />

        <div className="hidden lg:flex flex-col p-4 h-full gap-4 justify-center rounded-full bg-bar backdrop-blur-xs shadow-bar">
          {moon_and_planets.map((item, i) => {
            return (
              <PlanetImage planet={item} updatePlanet={updatePlanet} key={i} />
            );
          })}

        </div>

        <div
          className="lg:hidden flex w-full md:gap-0 md:w-xl p-4 rounded-full bg-bar backdrop-blur-xs shadow-bar overflow-hidden"
        >
          <PlanetsBar updatePlanet={updatePlanet} />
        </div>

      </div>

    </section>
  );
}
