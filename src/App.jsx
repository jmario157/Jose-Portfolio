import { LanguageProvider } from './context/LanguageContext';
import StarField from './components/StarField';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tech from './components/Tech';
import References from './components/References';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className='relative min-h-screen overflow-x-hidden bg-ink-950 text-neutral-300 antialiased selection:bg-green-400 selection:text-green-950'>
            <div className='fixed inset-0 -z-10'>
                <div className='absolute inset-0 bg-ink-950 bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,rgba(120,119,198,0.28),rgba(255,255,255,0))]' />
                <StarField />
            </div>

            <LanguageProvider>
                <div className='mx-auto max-w-[1500px] px-4 pb-6 sm:px-6 lg:px-8'>
                    <Navbar />

                    {/* Bento: en pantallas chicas todo se apila; desde lg son dos columnas.
                        Ambas columnas se igualan en altura y las tarjetas elásticas
                        (testimonios, tecnologías y el mensaje del formulario) absorben
                        el espacio sobrante para que no queden huecos. */}
                    <main className='grid grid-cols-1 gap-4 lg:grid-cols-12'>
                        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:col-span-7'>
                            <Hero className='md:col-span-2' />
                            <div className='flex flex-col gap-4'>
                                <About />
                                <Tech />
                            </div>
                            <References />
                        </div>

                        <div className='flex flex-col gap-4 lg:col-span-5'>
                            <Projects />
                            <Contact />
                        </div>
                    </main>

                    <Footer />
                </div>
            </LanguageProvider>
        </div>
    );
}

export default App;
