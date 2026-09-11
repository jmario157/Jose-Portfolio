import { createContext, useContext, useState, useEffect } from 'react';
import en from '../translations/en.json';
import es from '../translations/es.json';

const translations = { en, es };
const STORAGE_KEY = 'portfolio-lang';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === 'es' ? 'es' : 'en';
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLanguage = (newLang) => {
    if (newLang === 'en' || newLang === 'es') setLangState(newLang);
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
