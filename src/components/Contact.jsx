import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import Card from "./ui/Card"
import { useLanguage } from '../context/LanguageContext'

const EMPTY_FORM = { name: '', email: '', subject: '', message: '' }

const fieldClass =
    'w-full rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm text-neutral-100 placeholder-neutral-500 outline-none transition focus:border-green-500/60 focus:bg-white/[0.06]'

const Contact = () => {
    const { t } = useLanguage()
    const [form, setForm] = useState(EMPTY_FORM)

    const telHref = `tel:${t.contact.phoneNo.replace(/\s/g, '')}`

    const updateField = (event) => {
        const { name, value } = event.target
        setForm((current) => ({ ...current, [name]: value }))
    }

    // Sin backend: abrimos el cliente de correo con el mensaje ya redactado.
    // Para recibirlos en una bandeja propia, sustituir por un POST a Formspree o similar.
    const handleSubmit = (event) => {
        event.preventDefault()
        const subject = form.subject || `${t.contact.title} — ${form.name}`
        const body = `${form.message}\n\n${form.name}\n${form.email}`
        window.location.href = `mailto:${t.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    }

    return (
        <Card as='section' id='contacto' delay={0.15} className='flex flex-1 flex-col'>
            <h2 className='text-xl font-medium text-white'>{t.contact.title}</h2>
            <p className='mt-1.5 text-sm font-light text-neutral-400'>{t.contact.intro}</p>

            <address className='mt-5 flex flex-col gap-2.5 not-italic text-sm'>
                <span className='flex items-center gap-3 text-neutral-400'>
                    <FaMapMarkerAlt aria-hidden='true' className='text-green-500' />
                    {t.contact.address}
                </span>
                <a href={telHref} className='flex items-center gap-3 text-neutral-300 transition hover:text-green-400'>
                    <FaPhone aria-hidden='true' className='text-green-500' />
                    {t.contact.phoneNo}
                </a>
                <a
                    href={`mailto:${t.contact.email}`}
                    className='flex items-center gap-3 text-neutral-300 transition hover:text-green-400'
                >
                    <FaEnvelope aria-hidden='true' className='text-green-500' />
                    {t.contact.email}
                </a>
            </address>

            <form onSubmit={handleSubmit} className='mt-6 flex flex-1 flex-col gap-3'>
                <div className='grid grid-cols-1 gap-3 sm:grid-cols-2'>
                    <label className='sr-only' htmlFor='contact-name'>{t.contact.form.name}</label>
                    <input
                        id='contact-name'
                        name='name'
                        value={form.name}
                        onChange={updateField}
                        required
                        autoComplete='name'
                        placeholder={t.contact.form.name}
                        className={fieldClass}
                    />

                    <label className='sr-only' htmlFor='contact-email'>{t.contact.form.email}</label>
                    <input
                        id='contact-email'
                        name='email'
                        type='email'
                        value={form.email}
                        onChange={updateField}
                        required
                        autoComplete='email'
                        placeholder={t.contact.form.email}
                        className={fieldClass}
                    />
                </div>

                <label className='sr-only' htmlFor='contact-subject'>{t.contact.form.subject}</label>
                <input
                    id='contact-subject'
                    name='subject'
                    value={form.subject}
                    onChange={updateField}
                    placeholder={t.contact.form.subject}
                    className={fieldClass}
                />

                <label className='sr-only' htmlFor='contact-message'>{t.contact.form.message}</label>
                {/* El mensaje crece para ocupar lo que sobre y así igualar la otra columna. */}
                <textarea
                    id='contact-message'
                    name='message'
                    value={form.message}
                    onChange={updateField}
                    required
                    placeholder={t.contact.form.message}
                    className={`${fieldClass} min-h-[7rem] flex-1 resize-none`}
                />

                <button
                    type='submit'
                    className='rounded-xl bg-green-500 px-5 py-2.5 text-sm font-semibold text-green-950 transition hover:bg-green-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-300'
                >
                    {t.contact.form.send}
                </button>
            </form>
        </Card>
    )
}

export default Contact
