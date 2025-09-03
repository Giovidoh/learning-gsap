"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const TimelinesPage = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (boxRef.current) {
      Draggable.create(boxRef.current, {
        type: "x,y",
        bounds: boxRef.current.parentElement, // limit to parent
      });

      gsap.to(boxRef.current, { opacity: 1, duration: 1 });
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-[100dvh]">
      <div
        ref={boxRef}
        className="flex flex-col gap-3 items-center justify-center w-[50dvw] h-[50dvh] bg-amber-100 rounded-lg opacity-0 [&>p]:w-full text-center overflow-hidden"
      >
        <p>Drag me around 🚀</p>
      </div>
    </div>
  );
};

export default TimelinesPage;
