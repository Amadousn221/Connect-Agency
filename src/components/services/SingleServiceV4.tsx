"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";

interface DataType {
    id: number;
    titleFirst: string;
    titleLast: string;
    icon: string;
    thumb: string;
}

const SingleServiceV4 = ({ service }: { service: DataType }) => {
    const { id, icon, thumb, titleFirst, titleLast } = service;

    const itemRef = useRef<HTMLAnchorElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const link = itemRef.current;
        const wrapper = wrapperRef.current;
        const img = imgRef.current;

        if (!link || !wrapper || !img) return;

        const handleMove = () => {
            wrapper.style.opacity = "1";
            wrapper.style.transform = "translateX(-50px) rotate(-8deg)";
            img.style.transform = "scale(1, 1)";
        };

        const handleLeave = () => {
            wrapper.style.opacity = "0";
            wrapper.style.transform = "translateX(100px) rotate(8deg)";
            img.style.transform = "scale(0.5, 0.5)";
        };

        link.addEventListener("mousemove", handleMove);
        link.addEventListener("mouseleave", handleLeave);

        return () => {
            link.removeEventListener("mousemove", handleMove);
            link.removeEventListener("mouseleave", handleLeave);
        };
    }, []);

    return (
        <li>
            <Link
                href={`/services-details/${id}`}
                className="image-hover-item"
                ref={itemRef}
            >
                <div className="item-content">
                    <div className="icon">
                        <Image
                            src={`/assets/img/icon/${icon}`}
                            alt="Image Not Found"
                            width={70}
                            height={80}
                        />
                    </div>
                    <h3>
                        {titleFirst} <br /> {titleLast}
                    </h3>
                </div>

                <div className="image-hover-wrapper" ref={wrapperRef}>
                    <Image
                        ref={imgRef}
                        className="image-hover-placeholder"
                        src={`/assets/img/service/${thumb}`}
                        alt="Image Not Found"
                        width={490}
                        height={490}
                    />
                </div>
            </Link>
        </li>
    );
};

export default SingleServiceV4;
