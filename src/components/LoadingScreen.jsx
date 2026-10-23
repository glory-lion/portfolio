import { useState, useEffect } from "react";

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "< Hello World! >";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if (index > fullText.length) {
                clearInterval(interval);
                setTimeout(onComplete, 600);
            }
        }, 80);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-bg text-ink flex flex-col items-center justify-center">
            <div className="mb-5 text-3xl md:text-4xl font-mono font-bold">
                {text}
                <span className="animate-blink ml-1 text-accent">|</span>
            </div>

            <div className="w-[200px] h-[2px] bg-line rounded relative overflow-hidden">
                <div className="w-[40%] h-full bg-accent animate-loading-bar" />
            </div>
        </div>
    );
};
