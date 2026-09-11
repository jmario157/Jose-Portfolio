import { PROJECTS } from '../constants'
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"
import Card from "./ui/Card"
import { useLanguage } from '../context/LanguageContext'

const linkClass =
    'inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[0.7rem] font-medium text-neutral-300 transition hover:border-green-500/50 hover:text-green-400'

const Projects = () => {
    const { t } = useLanguage()

    return (
        <Card as='section' id='proyectos' delay={0.1}>
            <h2 className='mb-5 text-xl font-medium text-white'>{t.projects.title}</h2>

            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                {PROJECTS.map((project, index) => {
                    const content = t.projects.items[index]
                    return (
                        <article
                            key={content.title}
                            className='group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-white/25'
                        >
                            <div className='relative aspect-[16/10] overflow-hidden bg-ink-800'>
                                <img
                                    src={project.image}
                                    alt={content.title}
                                    loading='lazy'
                                    decoding='async'
                                    className='h-full w-full object-cover object-top transition duration-500 group-hover:scale-105'
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent' />
                            </div>

                            <div className='flex flex-1 flex-col p-4'>
                                <h3 className='text-sm font-semibold leading-snug text-white'>{content.title}</h3>
                                <p className='mt-1 text-[0.7rem] text-green-500'>{content.role}</p>

                                <div className='mt-3 flex flex-wrap gap-1.5'>
                                    {content.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className='rounded-md bg-white/[0.06] px-2 py-0.5 text-[0.65rem] font-medium text-neutral-300'
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {(project.liveUrl || project.repoUrl) && (
                                    <div className='mt-auto flex flex-wrap gap-2 pt-4'>
                                        {project.liveUrl && (
                                            <a href={project.liveUrl} target='_blank' rel='noopener noreferrer' className={linkClass}>
                                                <FaExternalLinkAlt aria-hidden='true' />
                                                {t.projects.liveLabel}
                                            </a>
                                        )}
                                        {project.repoUrl && (
                                            <a href={project.repoUrl} target='_blank' rel='noopener noreferrer' className={linkClass}>
                                                <FaGithub aria-hidden='true' />
                                                {t.projects.repoLabel}
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        </article>
                    )
                })}
            </div>
        </Card>
    )
}

export default Projects
