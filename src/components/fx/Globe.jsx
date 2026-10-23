import { useEffect, useRef } from "react";
import createGlobe from "cobe";

const SURABAYA = [-7.2575, 112.7521];
const SINGAPORE = [1.3521, 103.8198];

// cobe angles that turn a given [lat, long] to face the viewer
const facing = ([lat, long]) => [Math.PI - ((long * Math.PI) / 180 - Math.PI / 2), (lat * Math.PI) / 180];
const [HOME_PHI, HOME_THETA] = facing([-1, 108]);

const PALETTES = {
    light: {
        dark: 0,
        diffuse: 1.4,
        mapBrightness: 5,
        mapBaseBrightness: 0,
        baseColor: [0.88, 0.9, 0.84],
        glowColor: [0.97, 0.95, 0.9],
        markerColor: [0.79, 0.64, 0.15],
        arcColor: [0.79, 0.64, 0.15],
    },
    dark: {
        dark: 1,
        diffuse: 1.6,
        mapBrightness: 7,
        mapBaseBrightness: 0,
        baseColor: [0.25, 0.42, 0.33],
        glowColor: [0.12, 0.23, 0.17],
        markerColor: [0.83, 0.69, 0.25],
        arcColor: [0.83, 0.69, 0.25],
    },
};

const GLOBE_PLACES = [
    { id: "sby", label: "Surabaya", note: "Home" },
    { id: "sg", label: "Singapore", note: "NUS" },
];

// Globe that spins in from the far side, settles on Southeast Asia and draws
// an arc from Surabaya to Singapore. Dragging spins it; it eases back home.
export const Globe = ({ theme = "light", className = "" }) => {
    const hostRef = useRef(null);

    useEffect(() => {
        const host = hostRef.current;
        const canvas = document.createElement("canvas");
        canvas.style.cssText = "width:100%;height:100%;cursor:grab;touch-action:pan-y;opacity:0;transition:opacity 1s ease";
        host.appendChild(canvas);

        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        let size = host.offsetWidth;

        let phi = reduced ? HOME_PHI : HOME_PHI - 4.2;
        let theta = reduced ? HOME_THETA : -0.4;
        let drag = 0;
        let pointerStart = null;
        let raf = 0;

        const globe = createGlobe(canvas, {
            ...PALETTES[theme],
            devicePixelRatio: dpr,
            width: size * dpr,
            height: size * dpr,
            phi,
            theta,
            mapSamples: 20000,
            markerElevation: 0.02,
            arcWidth: 0.9,
            arcHeight: 0.25,
            markers: [
                { location: SURABAYA, size: 0.07, id: "sby" },
                { location: SINGAPORE, size: 0.09, id: "sg" },
            ],
            arcs: [{ from: SURABAYA, to: SINGAPORE, id: "journey" }],
        });

        const start = performance.now();
        const tick = (now) => {
            const t = (now - start) / 1000;
            if (pointerStart === null) drag *= 0.94;
            const idle = reduced ? 0 : Math.sin(t / 3) * 0.18;
            phi += (HOME_PHI + idle - phi) * 0.025;
            theta += (HOME_THETA - theta) * 0.025;
            globe.update({ phi: phi + drag, theta, width: size * dpr, height: size * dpr });
            raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        requestAnimationFrame(() => (canvas.style.opacity = "1"));

        const onDown = (e) => {
            pointerStart = e.clientX - drag * 200;
            canvas.style.cursor = "grabbing";
        };
        const onMove = (e) => {
            if (pointerStart !== null) drag = (e.clientX - pointerStart) / 200;
        };
        const onUp = () => {
            pointerStart = null;
            canvas.style.cursor = "grab";
        };
        const onResize = () => (size = host.offsetWidth);

        canvas.addEventListener("pointerdown", onDown);
        window.addEventListener("pointermove", onMove);
        window.addEventListener("pointerup", onUp);
        window.addEventListener("resize", onResize);

        return () => {
            cancelAnimationFrame(raf);
            canvas.removeEventListener("pointerdown", onDown);
            window.removeEventListener("pointermove", onMove);
            window.removeEventListener("pointerup", onUp);
            window.removeEventListener("resize", onResize);
            globe.destroy();
            host.replaceChildren();
        };
    }, [theme]);

    return (
        <div className={`relative aspect-square ${className}`}>
            <div ref={hostRef} className="absolute inset-0" />
            {GLOBE_PLACES.map((place) => (
                <span
                    key={place.id}
                    className="globe-label"
                    style={{ positionAnchor: `--cobe-${place.id}`, "--visible": `var(--cobe-visible-${place.id}, 0)` }}
                >
                    {place.label} <span className="text-accent-ink">· {place.note}</span>
                </span>
            ))}
        </div>
    );
};
