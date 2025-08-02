"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, TextPlugin, SplitText);

const TypewriterEffect = () => {
    useGSAP(() => {
        gsap.from("p", {
            text: "typewriter effect with GSAP 3",
            ease: "power1.in",
            duration: 2,
            repeat: 10,
            repeatDelay: 0.3,
            yoyo: true,
        });
    });

    return (
        <div className="flex flex-col items-center justify-center w-full h-full p-5 bg-radial from-[#111111] to-black">
            <div className="wrapper pl-20 w-full">
                <p className="text-4xl text-white text-left"></p>
            </div>
        </div>
    );
};

export default TypewriterEffect;
