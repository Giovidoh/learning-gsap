"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const AnimatedButtons = () => {
    useGSAP(() => {
        const items = document.querySelectorAll(".item");

        gsap.defaults({ duration: 0.3 });

        items.forEach((item) => {
            const tl = gsap
                .timeline({ paused: true })
                .to(item.querySelector(".dot"), {
                    backgroundColor: "#F93",
                    scale: 1.5,
                })
                .to(
                    item.querySelector(".text"),
                    {
                        color: "white",
                        x: 10,
                        scale: 1.3,
                        transformOrigin: "0% 50%",
                    },
                    "<"
                );

            item.addEventListener("mouseenter", () => tl.play());
            item.addEventListener("mouseleave", () => tl.reverse());
        });
    });

    return (
        <div className="flex flex-col w-full h-full gap-4 bg-radial from-[#222222] to-[#000000] p-5">
            <div className="item flex items-center gap-2 cursor-pointer w-fit">
                <div className="dot h-4 w-4 rounded-full bg-[#333333]"></div>
                <div className="text text-3xl uppercase font-extrabold text-[#777777]">
                    home
                </div>
            </div>
            <div className="item flex items-center gap-2 cursor-pointer w-fit">
                <div className="dot h-4 w-4 rounded-full bg-[#333333]"></div>
                <div className="text text-3xl uppercase font-extrabold text-[#777777]">
                    about
                </div>
            </div>
            <div className="item flex items-center gap-2 cursor-pointer w-fit">
                <div className="dot h-4 w-4 rounded-full bg-[#333333]"></div>
                <div className="text text-3xl uppercase font-extrabold text-[#777777]">
                    portfolio
                </div>
            </div>
            <div className="item flex items-center gap-2 cursor-pointer w-fit">
                <div className="dot h-4 w-4 rounded-full bg-[#333333]"></div>
                <div className="text text-3xl uppercase font-extrabold text-[#777777]">
                    contact us
                </div>
            </div>
        </div>
    );
};

export default AnimatedButtons;
