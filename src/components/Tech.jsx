import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import { RiHtml5Fill } from "react-icons/ri"
import { IoLogoCss3 } from "react-icons/io"
import { RiTailwindCssFill } from "react-icons/ri"
import { FaJsSquare } from "react-icons/fa"
import { RiReactjsFill } from "react-icons/ri"
import { RiNodejsFill } from "react-icons/ri"
import { SiMysql, SiGo, SiReact } from "react-icons/si"
import { FaPython } from "react-icons/fa"
import { motion } from "framer-motion"

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
        },
    }
})

const TECHNOLOGIES = [
    { Icon: RiHtml5Fill, color: 'text-orange-600', name: 'HTML5', duration: 2.5 },
    { Icon: IoLogoCss3, color: 'text-blue-600', name: 'CSS3', duration: 2.9 },
    { Icon: RiTailwindCssFill, color: 'text-cyan-600', name: 'Tailwind CSS', duration: 3.8 },
    { Icon: FaJsSquare, color: 'text-yellow-400', name: 'JavaScript', duration: 2.3 },
    { Icon: SiGo, color: 'text-sky-500', name: 'Go', duration: 3.2 },
    { Icon: RiReactjsFill, color: 'text-cyan-400', name: 'React', duration: 4.1 },
    { Icon: RiNodejsFill, color: 'text-green-600', name: 'Node.js', duration: 3.6 },
    { Icon: FaPython, color: 'text-yellow-600', name: 'Python', duration: 3.9 },
    { Icon: SiMysql, color: 'text-white', name: 'MySQL', duration: 4.5 },
    { Icon: SiReact, color: 'text-violet-400', name: 'React Native', duration: 3.4 },
]

const iconBoxClass = "rounded-xl border-2 border-neutral-800 p-3 sm:rounded-2xl sm:border-4 sm:p-4"
const iconClass = "text-6xl sm:text-6xl lg:text-7xl"

const Tech = () => {
    const { t } = useLanguage()
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}
                className='my-20 text-center text-4xl'>
                {t.tech.title}
            </motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 items-stretch justify-center gap-3 sm:gap-4 max-w-4xl mx-auto"
            >
                {TECHNOLOGIES.map(({ Icon, color, name, duration }) => (
                    <motion.div
                        key={name}
                        variants={iconVariants(duration)}
                        initial="initial"
                        animate="animate"
                        className={`group relative ${iconBoxClass} flex flex-col items-center justify-center min-h-[4.5rem] sm:min-h-[6rem] transition-shadow duration-200 hover:shadow-lg hover:shadow-neutral-900/50`}
                    >
                        <div className="flex flex-col items-center justify-center w-full flex-1 py-1">
                            <Icon className={`${iconClass} ${color} flex-shrink-0 transition-transform duration-200 group-hover:-translate-y-3`} />
                            <span className="absolute bottom-2 left-0 right-0 text-center text-[0.6rem] sm:text-xs font-medium text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                {name}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Tech