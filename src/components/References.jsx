import Card from "./ui/Card"
import { useLanguage } from '../context/LanguageContext'

// "Ing. Dulce Sanchez" -> "DS"
const initialsOf = (name) =>
    name
        .replace(/^ing\.?\s*/i, '')
        .split(/\s+/)
        .slice(0, 2)
        .map((word) => word[0])
        .join('')
        .toUpperCase()

const References = () => {
    const { t } = useLanguage()

    return (
        <Card as='section' id='opiniones' delay={0.15} className='flex flex-col'>
            <h2 className='mb-5 text-xl font-medium text-white'>{t.references.title}</h2>

            {/* La lista va en posición absoluta para que su largo no estire la tarjeta:
                así ésta iguala la altura de la columna vecina y la lista la llena entera. */}
            <div className='relative min-h-[20rem] flex-1'>
                <div className='absolute inset-0 -mr-2 flex flex-col gap-3 overflow-y-auto pr-2'>
                    {t.references.items.map((reference) => (
                        <figure
                            key={reference.name}
                            className='rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-white/20'
                        >
                            <figcaption className='mb-2 flex items-center gap-3'>
                                <span className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-green-500/80 to-purple-500/80 text-[0.7rem] font-semibold text-white'>
                                    {initialsOf(reference.name)}
                                </span>
                                <span className='text-sm font-medium text-neutral-200'>{reference.name}</span>
                            </figcaption>
                            <blockquote className='text-[0.8rem] font-light leading-relaxed text-neutral-400'>
                                {reference.description}
                            </blockquote>
                        </figure>
                    ))}
                </div>

                {/* Sugiere que la lista continúa más abajo. */}
                <div className='pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-ink-950 via-ink-950/60 to-transparent' />
            </div>
        </Card>
    )
}

export default References
