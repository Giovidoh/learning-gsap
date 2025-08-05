"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import GSDevTools from "gsap/GSDevTools";

gsap.registerPlugin(useGSAP, GSDevTools);

const Keyframes = () => {
  useGSAP(() => {
    const box = document.getElementById("box");

    gsap.to(box, {
      keyframes: [{ x: 100 }, { y: 100 }, { x: 0 }, { y: 0 }],
      duration: 2,
    });
  });
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-5 bg-radial from-[#111111] to-black">
      <div id="box" className="bg-green-600 w-[50px] h-[50px] rounded-md"></div>
    </div>
  );
};

export default Keyframes;
