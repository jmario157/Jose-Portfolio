import profileImg from "../assets/Profile2.webp"
import { FaArrowRight } from "react-icons/fa"
import Card from "./ui/Card"
import { useLanguage } from "../context/LanguageContext"

const Hero = ({ className = '' }) => {
    const { t } = useLanguage()

    return (
        <Card as='section' id='inicio' className={`flex flex-col justify-center ${className}`}>
            <div className='flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between'>
                <div className='order-2 flex-1 text-center md:order-1 md:text-left'>
                    <span className='inline-flex items-center gap-2 rounded-full border border-green-500/25 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400'>
                        <span className='relative flex h-2 w-2'>
                            <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75' />
                            <span className='relative inline-flex h-2 w-2 rounded-full bg-green-400' />
                        </span>
                        {t.hero.available}
                    </span>

                    <h1 className='mt-5 text-5xl font-light tracking-tight text-white sm:text-6xl xl:text-7xl'>
                        {t.hero.title}
                    </h1>

                    <p className='mt-2 bg-gradient-to-r from-green-400 via-sky-400 to-purple-400 bg-clip-text text-2xl font-medium tracking-tight text-transparent sm:text-3xl'>
                        {t.hero.subtitle}
                    </p>

                    <p className='mx-auto mt-5 max-w-lg text-sm font-light leading-relaxed text-neutral-400 md:mx-0'>
                        {t.hero.content}
                    </p>

                    <div className='mt-7 flex flex-wrap justify-center gap-3 md:justify-start'>
                        <a
                            href='#contacto'
                            className='inline-flex items-center gap-2 rounded-xl bg-green-500 px-5 py-2.5 text-sm font-semibold text-green-950 transition hover:bg-green-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-300'
                        >
                            {t.hero.ctaContact}
                            <FaArrowRight aria-hidden='true' className='text-xs' />
                        </a>
                        <a
                            href='#proyectos'
                            className='inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-2.5 text-sm font-semibold text-neutral-200 transition hover:border-white/30 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40'
                        >
                            {t.hero.ctaProjects}
                        </a>
                    </div>
                </div>

                <div className='order-1 w-full max-w-[240px] shrink-0 md:order-2 md:max-w-[260px] xl:max-w-[300px]'>
                    <div className='relative'>
                        <div className='absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-green-500/20 via-transparent to-purple-500/25 blur-xl' />
                        <img
                            src={profileImg}
                            alt={`${t.hero.title} — ${t.hero.subtitle}`}
                            width={300}
                            height={300}
                            fetchpriority='high'
                            className='relative aspect-square w-full rounded-[1.75rem] object-cover shadow-2xl shadow-black/60 ring-1 ring-white/15'
                        />
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default Hero
