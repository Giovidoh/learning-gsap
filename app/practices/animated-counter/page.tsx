"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const AnimatedCounter = () => {
    useGSAP(() => {
        gsap.to("#studentsCount", {
            innerText: 5000,
            duration: 1,
            snap: { innerText: 100 },
        });
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
        <ul>
            <li id="stat1" className="text-3xl font-bold">
                <span id="studentsCount">1,000</span> STUDENTS
            </li>
        </ul>
    );
};

export default AnimatedCounter;
