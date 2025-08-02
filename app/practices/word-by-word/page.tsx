"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { SplitText } from "gsap/SplitText";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(useGSAP, TextPlugin, SplitText, GSDevTools);

const WordByWord = () => {
    useGSAP(() => {
        let split;
        let animation = gsap.timeline({});

        gsap.set(".wrapper", { autoAlpha: 1 });

        split = SplitText.create("h1", { type: "words" });

        animation.fromTo(
            split.words,
            {
                opacity: 0,
                scale: 0.7,
                rotation: -40,
            },
            {
                opacity: 1,
                scale: 1,
                stagger: 0.1,
                rotation: 0,
            }
        );

        GSDevTools.create({ animation: animation });
    });

    return (
        <div className="flex flex-col items-center justify-center w-full h-full p-5 bg-radial from-[#111111] to-black">
            <div className="wrapper invisible">
                <h1 className="text-4xl text-white will-change-transform">
                    Word by word animation with GSAP
                </h1>
            </div>
        </div>
    );
};

export default WordByWord;
