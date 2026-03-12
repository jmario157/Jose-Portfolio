import { useEffect, useRef } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tech from './components/Tech';
import References from './components/References';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    const canvasRef = useRef(null);
    const inactivityTimeoutRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let stars = [];
        let isActive = false;

        // Configuración del canvas
        const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Crear estrellas
        const createStars = () => {
        stars = [];
        const numStars = 100;
        for (let i = 0; i < numStars; i++) {
            stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.5 + 0.5,
            speed: Math.random() * 0.5 + 0.1,
            opacity: Math.random() * 0.5 + 0.3,
            });
        }
        };
        createStars();

        // Animación de estrellas
        const animateStars = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        stars.forEach((star) => {
            star.y += star.speed;
            if (star.y > canvas.height) star.y = 0;
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
            ctx.fill();
        });
        if (isActive) {
            animationFrameId = requestAnimationFrame(animateStars);
        }
        };

        // Detectar inactividad
        const startAnimation = () => {
        if (!isActive) {
            isActive = true;
            animateStars();
        }
        };

        const resetInactivityTimer = () => {
        isActive = false;
        cancelAnimationFrame(animationFrameId);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        clearTimeout(inactivityTimeoutRef.current);
        inactivityTimeoutRef.current = setTimeout(startAnimation, 2000); 
        };

        // Listeners para interacción
        window.addEventListener('mousemove', resetInactivityTimer);
        window.addEventListener('click', resetInactivityTimer);
        window.addEventListener('keydown', resetInactivityTimer);
        window.addEventListener('scroll', resetInactivityTimer);

        // Iniciar temporizador
        resetInactivityTimer();

        // Limpieza
        return () => {
        window.removeEventListener('resize', resizeCanvas);
        window.removeEventListener('mousemove', resetInactivityTimer);
        window.removeEventListener('click', resetInactivityTimer);
        window.removeEventListener('keydown', resetInactivityTimer);
        window.removeEventListener('scroll', resetInactivityTimer);
        cancelAnimationFrame(animationFrameId);
        clearTimeout(inactivityTimeoutRef.current);
        };
    }, []);

    return (
        <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-green-300 selection:text-green-900'>
        <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient
                    (ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            <canvas ref={canvasRef} className="absolute top-0 z-[-1] h-full w-full" />
        </div>
        <div className='container mx-auto px-8'>
            <LanguageProvider>
            <Navbar />
            <Hero />
            <About />
            <Tech />
            <References />
            <Projects />
            <Contact />
            </LanguageProvider>
        </div>
        </div>
    );
}

export default App;