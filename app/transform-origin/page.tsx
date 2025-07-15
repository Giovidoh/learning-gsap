"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from "react";

gsap.registerPlugin(useGSAP);

const TransformOriginPage = () => {
    useGSAP(() => {
        const demo = document.getElementById("demo");
        const box = document.getElementById("blueBox");
        const dot = document.getElementById("mouseDot");

        demo?.addEventListener("click", (e) => {
            const x = `${e.clientX - box?.offsetLeft}px`;
            const y = `${e.clientY - box?.offsetTop}px`;

            const tween = gsap.fromTo(
                "#blueBox",
                { scale: 1 },
                {
                    transformOrigin: `${x} ${y}`,
                    // rotation: 360,
                    scale: 0,
                    duration: 0.5,
                    repeat: 1,
                    yoyo: true,
                }
            );
            tween.restart();

            // The mouse dot showing at the position we click
            if (dot) {
                dot.style.left = e.clientX + "px";
                dot.style.top = e.clientY + "px";
            }

            console.log(`${x} ${y}`);
        });

        box?.addEventListener("click", (e) => {
            let rect = e.target?.getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;

            console.log(x, " - ", y);
        });
    });

    return (
        <div
            id="demo"
            className="flex flex-col justify-center items-center h-[100dvh] w-[100dvw]"
        >
            <div
                id="mouseDot"
                className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full z-10"
            ></div>
            <div
                id="blueBox"
                className="h-20 w-20 bg-blue-600 rounded-md"
            ></div>
            <hr className="w-full " />
        </div>
    );
};

export default TransformOriginPage;
