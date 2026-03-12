import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from "framer-motion"
import { useLanguage } from '../context/LanguageContext'

const Projects = () => {
    const { t } = useLanguage()
    return <div className='border-b border-neutral-900 pb-4'>
        <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1}}
        className='my-20 text-center text-4xl'>
            {t.projects.title}
        </motion.h2>
        <div>
            {PROJECTS.map((project, index) => {
                const content = t.projects.items[index]
                return (
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div 
                        whileInView={{opacity: 1, x: 0}}
                        initial={{opacity: 0, x: -100}}
                        transition={{duration: 1}}
                        className='w-full lg:w-1/4'>
                            <img 
                                src={project.image} 
                                width={150} 
                                height={150} 
                                alt={content.title}
                                className='mb-6 rounded'
                            />
                    </motion.div>
                    <motion.div 
                        whileInView={{opacity: 1, x: 0}}
                        initial={{opacity: 0, x: 100}}
                        transition={{duration: 1}}
                        className='w-full max-w-xl lg:w-3/4'>
                            <h6 className='mb-2 font-semibold'>{content.title}</h6>
                            <p className='mb-4 text-neutral-400'>{content.description}</p>
                            {content.technologies.map((tech, i) => (
                                <span key={i} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-green-600'>
                                    {tech}
                                </span>
                            ))}
                    </motion.div>
                </div>
                )
            })}
        </div>
    </div>
}

export default Projects