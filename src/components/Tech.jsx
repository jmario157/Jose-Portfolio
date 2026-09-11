import { RiHtml5Fill, RiTailwindCssFill, RiReactjsFill, RiNodejsFill } from "react-icons/ri"
import { IoLogoCss3 } from "react-icons/io"
import { FaJsSquare, FaPython } from "react-icons/fa"
import { SiMysql, SiGo, SiReact } from "react-icons/si"
import Card from "./ui/Card"
import { useLanguage } from '../context/LanguageContext'

const TECHNOLOGIES = [
    { Icon: RiHtml5Fill, color: 'text-orange-500', name: 'HTML5' },
    { Icon: IoLogoCss3, color: 'text-blue-500', name: 'CSS3' },
    { Icon: RiTailwindCssFill, color: 'text-cyan-400', name: 'Tailwind CSS' },
    { Icon: FaJsSquare, color: 'text-yellow-400', name: 'JavaScript' },
    { Icon: SiGo, color: 'text-sky-400', name: 'Go' },
    { Icon: RiReactjsFill, color: 'text-cyan-300', name: 'React' },
    { Icon: RiNodejsFill, color: 'text-green-500', name: 'Node.js' },
    { Icon: FaPython, color: 'text-yellow-300', name: 'Python' },
    { Icon: SiMysql, color: 'text-neutral-200', name: 'MySQL' },
    { Icon: SiReact, color: 'text-violet-400', name: 'React Native' },
]

const Tech = () => {
    const { t } = useLanguage()

    return (
        <Card as='section' id='tecnologias' delay={0.1} className='flex flex-1 flex-col'>
            <h2 className='mb-5 text-xl font-medium text-white'>{t.tech.title}</h2>

            <ul className='grid flex-1 grid-cols-5 content-center gap-2.5 sm:gap-3'>
                {TECHNOLOGIES.map(({ Icon, color, name }) => (
                    <li key={name} className='group relative'>
                        <div className='flex aspect-square items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition duration-200 group-hover:-translate-y-1 group-hover:border-white/25 group-hover:bg-white/[0.08]'>
                            <Icon className={`text-2xl sm:text-3xl ${color}`} aria-hidden='true' />
                        </div>
                        {/* Tooltip: el nombre visible sólo al pasar el cursor mantiene la cuadrícula limpia. */}
                        <span
                            role='tooltip'
                            className='pointer-events-none absolute -top-8 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-ink-800 px-2 py-1 text-[0.65rem] text-neutral-200 opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100'
                        >
                            {name}
                        </span>
                        <span className='sr-only'>{name}</span>
                    </li>
                ))}
            </ul>
        </Card>
    )
}

export default Tech
