"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(useGSAP, GSDevTools);

const page = () => {
  useGSAP(() => {
    const box = document.getElementById("box");

    const tl = gsap.timeline();
    tl.to(box, {
      keyframes: {
        "25%": { y: 0 },
        "50%": { y: -100, ease: "power1.out" },
        "75%": { y: 0, ease: "power1.in" },
        "100%": { x: 500, ease: "none" },
      },
      duration: 2,
    });

    GSDevTools.create();
  });
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full p-5 bg-conic-120 from-[#111111] to-black bg-auto">
      <div
        id="box"
        className="absolute top-1/2 -translate-y-1/2 left-10 bg-green-600 w-[50px] h-[50px] rounded-md"
      ></div>
    </div>
  );
};

export default page;
