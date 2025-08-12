"use client"
import { useState, useEffect } from "react";

export default function useSize() {
    const [size, setSize] = useState(0);
    useEffect(() => {
        const handleResize = () => {
            setSize(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return size;
}
