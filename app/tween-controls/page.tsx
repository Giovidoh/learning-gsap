"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function TweenControlsPage() {
    const handlePlayRef = useRef<(() => void) | null>(null);

    //Animations
    useGSAP(() => {
        const tween = gsap.to("#blueBox", {
            duration: 3,
            x: window.innerWidth,
            xPercent: -100,
            ease: "steps(7)",
            paused: true,
        });

        handlePlayRef.current = () => {
            tween.play();
        };
        document.getElementById("pause")?.addEventListener("click", () => {
            tween.pause();
        });
        document.getElementById("reverse")?.addEventListener("click", () => {
            tween.reverse();
        });
        document.getElementById("restart")?.addEventListener("click", () => {
            tween.restart();
        });
    });

    return (
        <div className="flex flex-col gap-20 items-center">
            <div
                id="boxes"
                className="flex justify-start items-start h-full w-full gap-5"
            >
                <div
                    id="blueBox"
                    className="h-20 w-20 bg-blue-600 rounded-md"
                ></div>
                {/* <div
                    id="yellowBox"
                    className="h-20 w-20 bg-yellow-400 rounded-md"
                ></div>
                <div
                    id="greenBox"
                    className="h-20 w-20 bg-green-600 rounded-md"
                ></div>
                <div
                    id="redBox"
                    className="h-20 w-20 bg-red-600 rounded-md"
                ></div> */}
            </div>
            <div
                id="nav"
                className="flex items-center gap-4 [&>button]:px-5 [&>button]:py-3 [&>button]:bg-yellow-700 [&>button]:text-white [&>button]:rounded-lg [&>button]:cursor-pointer"
            >
                <button id="play" onClick={() => handlePlayRef.current?.()}>
                    play
                </button>
                <button id="pause">pause</button>
                <button id="reverse">reverse</button>
                <button id="restart">restart</button>
            </div>
        </div>
    );
}
