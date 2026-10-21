import { useEffect } from "react";

/**
 * Moves each glider down as you scroll down and back up as you scroll up.
 * gliders: array of { ref, speed = 0.25, sway = 24, max = 180 }
 */
export default function UseGliderScroll(gliders) {
    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        let ticking = false;

        const update = () => {
            const vh = window.innerHeight;
            gliders.forEach(({ ref, speed = 0.25, sway = 24, max = 180 }) => {
                const el = ref.current;
                if (!el || !el.offsetParent) return;
                // glider's resting center in viewport coords (offsetTop ignores translate)
                const parentTop = el.offsetParent.getBoundingClientRect().top;
                const baseY = parentTop + el.offsetTop + el.offsetHeight / 2;
                const d = vh / 2 - baseY; // 0 when centered on screen
                const y = Math.max(-max, Math.min(max, d * speed));
                const x = Math.sin(d / 250) * sway;
                el.style.translate = `${x}px ${y}px`;
            });
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(update);
                ticking = true;
            }
        };

        // recalculate once images have real heights
        const imgs = gliders.map((g) => g.ref.current).filter((el) => el && !el.complete);
        imgs.forEach((img) => img.addEventListener("load", update));

        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        update();

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            imgs.forEach((img) => img.removeEventListener("load", update));
        };
    }, []);
}