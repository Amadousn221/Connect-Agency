"use client";
import { useEffect, useRef, useState } from "react";

interface DataType {
    id: number;
    title: string;
    end: number;
}

const ProgressV1 = ({ progress }: { progress: DataType }) => {
    const { title, end } = progress;

    const [progressWidth, setProgressWidth] = useState(0);
    const progressBarRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setProgressWidth(end ?? 0);
            }
        }, { threshold: 1.0 });

        // Store the current ref value in a variable
        const currentRef = progressBarRef.current;

        if (currentRef) {
            observer.observe(currentRef);
        }

        // Cleanup function
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [end]);

    return (
        <>
            <div className="progress-box">
                <h5>{title}</h5>
                <div className="progress" ref={progressBarRef}>
                    <div className="progress-bar" role="progressbar" data-width={end} style={{ width: `${progressWidth}%` }}>
                        <span>{`${end ?? 0}%`}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProgressV1;