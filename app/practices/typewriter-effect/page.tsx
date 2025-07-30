"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(useGSAP, TextPlugin);

const TypewriterEffect = () => {
    useGSAP(() => {
        gsap.to("p", {
            text: "typewriter effect with GSAP 3",
            ease: "power1.in",
            duration: 2,
        });
    });

    return (
        <div className="flex flex-col items-center justify-center w-full h-full p-5 bg-radial from-[#111111] to-black">
            <div className="wrapper">
                <p className="text-4xl text-white">
                    I love ayimolou so much!!!
                </p>
            </div>
        </div>
    );
};

export default TypewriterEffect;
