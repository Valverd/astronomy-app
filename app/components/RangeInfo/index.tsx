import { PlanetObject } from "../PlanetInfo";
import Range from "../Range";

interface RangeInfoProps {
  planet: PlanetObject;
}

export default function RangeInfo({ planet }: RangeInfoProps) {
  return (
    <div className="w-full flex justify-center items-center gap-8">
      {planet.type == "planet" ? (
        <p className="text-center">
          <span className="font-bold block">Periélio</span>
          {planet.min} milhões km
        </p>
      ) : (
        <p className="text-center">
          <span className="font-bold block">Perigeu</span>
          {planet.min} km
        </p>
      )}

      <Range planet={planet} />

      {planet.type == "planet" ? (
        <p className="text-center">
          <span className="font-bold block">Afrânio</span>
          {planet.max} milhões km
        </p>
      ) : (
        <p className="text-center">
          <span className="font-bold block">Apogeu</span>
          {planet.max} km
        </p>
      )}
    </div>
  );
}
