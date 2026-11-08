"use client"
import { useEffect, useState } from 'react';

const ScrollUpBtn = () => {
    const [scrollUpButton, setScrollUpButton] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setScrollUpButton(true)
            } else {
                setScrollUpButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
            {scrollUpButton && (
                <button type="button" className='customScrollUp' onClick={scrollUp} aria-label="Retour en haut de la page"><i className="fas fa-angle-up" aria-hidden="true"></i></button>
            )}
        </>
    );
};

export default ScrollUpBtn;