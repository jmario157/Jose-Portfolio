import profileImg from "../assets/Profile2.png"
import { motion } from "framer-motion"
import { useLanguage } from "../context/LanguageContext"

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {x: 0, opacity: 1, transition: {duration: 0.5, delay: delay}}
})

const Hero = () => {
    const { t } = useLanguage()
    return <div className='border=b border-neutral-900 pb=4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <motion.h1 
                        variants={container(0)}
                        initial='hidden'
                        animate='visible'
                        className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>
                            {t.hero.title}
                    </motion.h1>
                    <motion.span 
                        variants={container(0.4)}
                        initial='hidden'
                        animate='visible'
                        className='bg-gradient-to-r from-green-400 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>
                            {t.hero.subtitle}
                    </motion.span>
                    <motion.p
                        variants={container(0.8)}
                        initial='hidden'
                        animate='visible'
                        className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                            {t.hero.content}
                    </motion.p>
                </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                    <motion.img 
                        initial={{x: 100, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{duration: 1, delay:1.2}}
                        src={profileImg} 
                        alt="Profile Image"
                        className="rounded-2xl max-w-md w-full object-cover aspect-square brightness-75 contrast-105 saturate-90 shadow-2xl shadow-black/50 ring-1 ring-white/10" />
                </div>
            </div>
        </div>
    </div>
}

export default Hero