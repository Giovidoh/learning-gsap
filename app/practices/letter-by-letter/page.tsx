"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { SplitText } from "gsap/SplitText";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(useGSAP, TextPlugin, SplitText, GSDevTools);

const TypewriterEffect = () => {
    useGSAP(() => {
        let split;
        let animation = gsap.timeline({});

        gsap.set(".wrapper", { autoAlpha: 1 });

        split = new SplitText("h1", { type: "chars" });

        GSDevTools.create({ animation: animation });
    });

    return (
        <div className="flex flex-col items-center justify-center w-full h-full p-5 bg-radial from-[#111111] to-black">
            <div className="wrapper invisible">
                <h1 className="text-4xl text-white">
                    Letter by letter animation with GSAP
                </h1>
            </div>
        </div>
    );
};

export default TypewriterEffect;
