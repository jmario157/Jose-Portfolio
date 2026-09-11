import { useState } from 'react'
import aboutImg from "../assets/FotitoAb.webp"
import Card from "./ui/Card"
import { useLanguage } from '../context/LanguageContext'

const About = () => {
    const { t } = useLanguage()
    const [expanded, setExpanded] = useState(false)

    return (
        <Card as='section' id='sobre-mi' delay={0.05}>
            <div className='mb-4 flex items-center gap-4'>
                <img
                    src={aboutImg}
                    alt={t.hero.title}
                    width={64}
                    height={64}
                    loading='lazy'
                    decoding='async'
                    className='h-16 w-16 shrink-0 rounded-full object-cover ring-2 ring-white/15'
                />
                <h2 className='text-xl font-medium text-white'>{t.about.title}</h2>
            </div>

            <p className='text-sm font-light leading-relaxed text-neutral-400'>
                {expanded ? t.about.text : t.about.shortText}
            </p>

            <button
                type='button'
                onClick={() => setExpanded((value) => !value)}
                className='mt-3 text-sm font-medium text-green-500 transition hover:text-green-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500'
            >
                {expanded ? t.about.readLess : t.about.readMore}
            </button>
        </Card>
    )
}

export default About
