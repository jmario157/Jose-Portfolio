import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SOCIAL_LINKS } from "../constants";
import { useLanguage } from '../context/LanguageContext';

const SOCIALS = [
  { href: SOCIAL_LINKS.linkedin, Icon: FaLinkedin, label: 'LinkedIn' },
  { href: SOCIAL_LINKS.github, Icon: FaGithub, label: 'GitHub' },
  { href: SOCIAL_LINKS.instagram, Icon: FaInstagram, label: 'Instagram' },
];

const iconButton =
  'flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-lg text-neutral-300 transition hover:border-white/25 hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500';

const Navbar = () => {
  const { lang, setLanguage, t } = useLanguage();

  const nextLang = lang === 'en' ? 'es' : 'en';
  const switchLabel = lang === 'en' ? 'Cambiar a español' : 'Switch to English';

  return (
    <header className='sticky top-0 z-30 -mx-4 mb-4 bg-ink-950/70 px-4 py-4 backdrop-blur-md sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8'>
      <div className='flex items-center justify-between gap-4'>
        <a
          href='#inicio'
          className='flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] font-semibold tracking-wide text-white transition hover:border-white/25'
          aria-label={t.hero.title}
        >
          JM
        </a>

        <nav aria-label='Redes sociales' className='flex items-center gap-2'>
          {SOCIALS.map(({ href, Icon, label }) => (
            <a key={label} href={href} target='_blank' rel='noopener noreferrer' aria-label={label} className={iconButton}>
              <Icon />
            </a>
          ))}
        </nav>

        <button
          type='button'
          onClick={() => setLanguage(nextLang)}
          className='rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-medium tracking-wide text-neutral-300 transition hover:border-white/25 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500'
          title={switchLabel}
          aria-label={switchLabel}
        >
          {nextLang.toUpperCase()}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
