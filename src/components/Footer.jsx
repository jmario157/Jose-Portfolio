import { useLanguage } from '../context/LanguageContext'

const Footer = () => {
    const { t } = useLanguage()

    return (
        <footer className='mt-6 pb-4 text-center text-xs text-neutral-600'>
            © {new Date().getFullYear()} {t.hero.title} · {t.hero.subtitle}
        </footer>
    )
}

export default Footer
