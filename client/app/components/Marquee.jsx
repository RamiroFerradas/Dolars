"use client";
import Marquee from "react-fast-marquee";
import { addDotsToNumber } from "../utils/addDotsToNumber";
import useFetchRandomData from "../hooks/useFetchRandonData";
export default function MarqueeComponent() {
  const { randomDataTypes, loading } = useFetchRandomData();

  return (
    <Marquee
      autoFill
      pauseOnHover
      className="text-green-100 bg-gray-400"
      direction="rigth"
      gradient={false}
    >
      {randomDataTypes.map(({ title, valor }, i) => (
        <div key={i} className="mr-4">
          {loading ? (
            <p className="text-gray-400">.</p>
          ) : (
            <p>
              {title}: ${addDotsToNumber(valor)}
            </p>
          )}
        </div>
      ))}
    </Marquee>
  );
}
