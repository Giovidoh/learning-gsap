"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const TimelinesPage = () => {
    useGSAP(() => {
        gsap.set("#demo", { scale: 0.7 });
        gsap.timeline()
            .to("#demo", { duration: 1, opacity: 1, scale: 1 })
            .from("#demo h1", { opacity: 0, scale: 0 }, "+=1")
            .from(
                "#demo p",
                {
                    opacity: 0,
                    xPercent: -50,
                    stagger: 0.2,
                    ease: "back",
                },
                "<"
            );
    });
    return (
        <div className="flex justify-center items-center h-[100dvh]">
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
