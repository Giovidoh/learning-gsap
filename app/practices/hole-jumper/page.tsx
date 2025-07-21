"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const HoleJumper = () => {
    useGSAP(() => {
        const hole = document.getElementById("hole");
        const herman = document.getElementById("herman");
        const shadow = document.getElementById("shadow");

        const tl = gsap
            .timeline()
            .from(hole, { scale: 0, repeat: 1, yoyo: true })
            .fromTo(herman, { y: 160, scaleY: 2 }, { y: -175, scaleY: 1 }, 0.2)
            .to(herman, { y: 0, ease: "power1.in" }, ">")
            .to(herman, {
                scaleY: 0.8,
                scale: 1.2,
                duration: 0.2,
                transformOrigin: "50% 100%",
                repeat: 1,
                yoyo: true,
            })
            .to(shadow, { opacity: 1, duration: 0.2 }, 0.6)
            .to(shadow, { scaleX: 0.7, ease: "power1.in" }, ">");
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
        <div className="flex justify-center items-center bg-cyan-900 w-full h-full">
            <div className="relative bg-cyan-200 w-[400px] h-[400px]">
                <div
                    id="shadow"
                    className="absolute top-[290px] left-1/2 -translate-x-1/2 bg-radial from-black/50 to-75% to-cyan-200/10 w-[150px] h-[20px] rounded-[50%] opacity-0"
                ></div>
                <div
                    id="hole"
                    className="absolute top-[290px] left-1/2 -translate-x-1/2 bg-black w-[150px] h-[20px] rounded-[50%]"
                ></div>
                <div className="relative w-full h-[300px] overflow-hidden">
                    <img
                        id="herman"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100px]"
                        src="https://assets.codepen.io/32887/herman.svg"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default HoleJumper;
