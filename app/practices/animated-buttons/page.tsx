"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const AnimatedButtons = () => {
    useGSAP(() => {
        const item = document.querySelector(".item");

        gsap.defaults({ duration: 0.3 });

        const tl = gsap
            .timeline({ paused: true })
            .to(".text", { color: "white", x: 10 })
            .to(".dot", { backgroundColor: "#F93", scale: 1.5 }, "<");

        item?.addEventListener("mouseenter", () => tl.play());
        item?.addEventListener("mouseleave", () => tl.reverse());
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
        <div className="w-full h-full bg-radial from-[#222222] to-[#000000] p-5">
            <div className="item flex items-center gap-2 cursor-pointer w-fit">
                <div className="dot h-4 w-4 rounded-full bg-[#333333]"></div>
                <div className="text text-3xl uppercase font-extrabold text-[#777777]">
                    home
                </div>
            </div>
        </div>
    );
};

export default AnimatedButtons;
