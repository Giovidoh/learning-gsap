"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const HoleJumper = () => {
    useGSAP(() => {
        const hole = document.getElementById("hole");
        const herman = document.getElementById("herman");

        const tl = gsap.timeline();
        tl.from(hole, { scale: 0, repeat: 1, yoyo: true })
            .fromTo(herman, { y: 110 }, { y: -175 }, 0.32)
            .to(herman, { y: 0, ease: "power1.in" }, ">");
    });

    useEffect(() => {
        if (process.env.NODE_ENV === "development") {
            // Only import GSDevTools in the browser and dev mode
            import("gsap/GSDevTools").then((module) => {
                const GSDevTools = module.default;
                gsap.registerPlugin(GSDevTools);
                GSDevTools.create();
            });
        }
    }, []);

    return (
        <div className="flex justify-center items-center w-full h-full">
            <div className="relative w-[400px] h-[400px] bg-gray-300">
                <div
                    id="hole"
                    className="absolute left-[125px] top-[290px] w-[150px] h-[20px] rounded-[50%] bg-black"
                ></div>
                <div className="relative w-full h-[300px] overflow-hidden">
                    <img
                        id="herman"
                        className="absolute -bottom-0 left-[150px] w-[100px] h-[100px]"
                        src="https://assets.codepen.io/32887/herman.svg"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default HoleJumper;
