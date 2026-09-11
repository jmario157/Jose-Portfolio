import { motion } from 'framer-motion';

const base =
    'relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] shadow-xl shadow-black/40 backdrop-blur-sm transition-colors duration-300 hover:border-white/20';

const reveal = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
};

/**
 * Tarjeta del layout bento. `padded` a false cuando el contenido llega hasta el borde
 * (por ejemplo una imagen a sangre).
 */
const Card = ({ as = 'div', className = '', padded = true, delay = 0, children, ...props }) => {
    const Component = motion[as] ?? motion.div;

    return (
        <Component
            variants={reveal}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay, ease: 'easeOut' }}
            className={`${base} ${padded ? 'p-6 sm:p-7' : ''} ${className}`}
            {...props}
        >
            {children}
        </Component>
    );
};

export default Card;
