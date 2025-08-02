"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { SplitText } from "gsap/SplitText";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(useGSAP, TextPlugin, SplitText, GSDevTools);

const LineByLine = () => {
    useGSAP(() => {
        let split;
        let animation = gsap.timeline({ id: "animation", repeat: 10 });

        gsap.set(".wrapper", { autoAlpha: 1 });

        split = SplitText.create("h1", { type: "lines" });

        animation.from(split.lines, {
            opacity: 0,
            rotationX: -90,
            rotationY: -80,
            stagger: 0.1,
            transformOrigin: "50% 50% -200",
        });

        GSDevTools.create({ animation: animation });
    });

    return (
        <div className="flex flex-col items-center justify-center w-full h-full p-5 bg-radial from-[#111111] to-black">
            <div className="wrapper invisible">
                <h1 className="text-4xl text-white will-change-transform perspective-[400px] w-[300px]">
                    And the time came when the risk to remain tight in a bud was
                    more painful than the risk it took to blossom.
                </h1>
            </div>
        </div>
    );
};

export default LineByLine;
