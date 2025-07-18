"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const TimelinesPage = () => {
    useGSAP(() => {
        gsap.set("#demo", { scale: 0.7 });
        const animation = gsap
            .timeline()
            .to("#demo", { duration: 1, opacity: 1, scale: 1 })
            .from("#demo h1", { opacity: 0, scale: 0 })
            // This is a LABEL
            .add("test")
            .from("#demo p", {
                opacity: 0,
                xPercent: -50,
                stagger: 0.2,
                ease: "back",
            });

        document
            .getElementById("play")
            ?.addEventListener("click", () => animation.play());
        document
            .getElementById("pause")
            ?.addEventListener("click", () => animation.pause());
        document
            .getElementById("reverse")
            ?.addEventListener("click", () => animation.reverse());
        document
            .getElementById("restart")
            ?.addEventListener("click", () => animation.restart());
        document
            .getElementById("test")
            ?.addEventListener("click", () => animation.play("test"));
    });
    return (
        <div className="flex flex-col gap-4 justify-center items-center h-[100dvh]">
            <div
                id="nav"
                className="flex items-center gap-4 [&>button]:px-5 [&>button]:py-3 [&>button]:bg-yellow-700 [&>button]:text-white [&>button]:rounded-lg [&>button]:cursor-pointer"
            >
                <button id="play">play</button>
                <button id="pause">pause</button>
                <button id="reverse">reverse</button>
                <button id="restart">restart</button>
                <button id="test">test</button>
            </div>
            <div
                id="demo"
                className="flex flex-col gap-3 items-center justify-center w-[50dvw] h-[50dvh] bg-amber-100 rounded-lg opacity-0 [&>p]:w-full text-center overflow-hidden"
            >
                <h1 className="font-semibold text-[clamp(18px,_4vw,_20px)]">
                    Welcome!
                </h1>
                <p>This is the best site ever</p>
                <p>Everything you need</p>
                <p>In one and only place</p>
                <p>Everything safe!</p>
            </div>
        </div>
    );
};

export default TimelinesPage;
