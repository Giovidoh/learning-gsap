"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const PulseButton = () => {
    useGSAP(() => {
        const cta = document.getElementById("cta");

        const tween = gsap.to(cta, {
            scale: 1,
            paused: true,
            repeat: -1,
            yoyo: true,
        });

        cta?.addEventListener("mouseenter", () => tween.restart());
        cta?.addEventListener("mouseleave", () => {
            tween.pause();
            gsap.to(cta, { scale: 0.8 });
        });
    });

    // useEffect(() => {
    //     if (process.env.NODE_ENV === "development") {
    //         // Only import GSDevTools in the browser and dev mode
    //         import("gsap/GSDevTools").then((module) => {
    //             const GSDevTools = module.default;
    //             gsap.registerPlugin(GSDevTools);
    //             GSDevTools.create();
    //         });
    //     }
    // }, []);
    return (
        <div className="flex flex-col items-center justify-center w-full h-full p-5">
            <button
                id="cta"
                className="bg-green-700 w-fit p-4 text-white rounded-lg cursor-pointer will-change-transform text-3xl scale-80"
            >
                Book Now
            </button>
        </div>
    );
};

export default PulseButton;
