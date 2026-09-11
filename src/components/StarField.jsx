import { useEffect, useRef } from 'react';

const STAR_DENSITY = 1 / 14000; // estrellas por px^2, se adapta al tamaño de pantalla

const StarField = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        let stars = [];
        let animationFrameId = null;
        let width = 0;
        let height = 0;

        const buildStars = () => {
            const count = Math.round(width * height * STAR_DENSITY);
            stars = Array.from({ length: count }, () => ({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 1.5 + 0.5,
                speed: Math.random() * 0.5 + 0.1,
                opacity: Math.random() * 0.5 + 0.3,
            }));
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);
            stars.forEach((star) => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.fill();
            });
        };

        const tick = () => {
            stars.forEach((star) => {
                star.y += star.speed;
                if (star.y > height) {
                    star.y = 0;
                    star.x = Math.random() * width;
                }
            });
            draw();
            animationFrameId = requestAnimationFrame(tick);
        };

        const stop = () => {
            if (animationFrameId !== null) {
                cancelAnimationFrame(animationFrameId);
                animationFrameId = null;
            }
        };

        const start = () => {
            if (reduceMotion || animationFrameId !== null) return;
            animationFrameId = requestAnimationFrame(tick);
        };

        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            buildStars();
            draw();
        };

        // Pausar mientras la pestaña está en segundo plano evita gastar batería.
        const handleVisibility = () => (document.hidden ? stop() : start());

        resize();
        start();

        window.addEventListener('resize', resize);
        document.addEventListener('visibilitychange', handleVisibility);

        return () => {
            stop();
            window.removeEventListener('resize', resize);
            document.removeEventListener('visibilitychange', handleVisibility);
        };
    }, []);

    return <canvas ref={canvasRef} aria-hidden='true' className='absolute top-0 z-[-1] h-full w-full' />;
};

export default StarField;
