import React from 'react'
import { motion } from "framer-motion"
import { useLanguage } from '../context/LanguageContext'

const Contact = () => {
    const { t } = useLanguage()
    return <div className='border-b border-neutral-900 pb-20'>
        <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1}}
        className='my-20 text-center text-4xl'>
            {t.contact.title}
        </motion.h2>
        <motion.div 
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: 1}}
            className='text-center tracking-tighter'>
                <p className='my-4'>{t.contact.address}</p>
                <p className='my-4'>{t.contact.phoneNo}</p>
                <a href={`mailto:${t.contact.email}`} className='border-b'>{t.contact.email}</a>
        </motion.div>
    </div>
}

export default Contact