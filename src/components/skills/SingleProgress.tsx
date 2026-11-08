"use client";
import { useEffect, useRef, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";

interface DataType {
    id: number;
    end: number;
    title: string;
}

const gradientStyles = {
    path: {
        stroke: "url(#gradient)",
    },
};

const SingleProgress = ({ skill }: { skill: DataType }) => {
    const { end, title } = skill;

    const [progressValue, setProgressValue] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const intersectionRef = useRef<HTMLDivElement | null>(null);

    // Intersection Observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.5 }
        );

        const currentRef = intersectionRef.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    // Animate Progress
    useEffect(() => {
        if (isVisible) {
            const interval = setInterval(() => {
                setProgressValue((prev) => Math.min(prev + 5, end));
            }, 50);

            return () => clearInterval(interval);
        }
    }, [isVisible, end]);

    return (
        <div className="item" ref={intersectionRef}>

            {/* Gradient SVG */}
            <svg style={{ height: 0, width: 0 }}>
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: "#1351d8" }} />
                        <stop offset="100%" style={{ stopColor: "#9c00ff" }} />
                    </linearGradient>
                </defs>
            </svg>

            {/* Progress Bar */}
            <div className="progressbar">
                <CircularProgressbar
                    strokeWidth={5}
                    value={progressValue}
                    text={`${progressValue}%`}
                    styles={gradientStyles}
                />
            </div>

            <h4>{title}</h4>
        </div>
    );
};

export default SingleProgress;
