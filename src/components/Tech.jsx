import React from 'react'
import { RiHtml5Fill } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJsSquare } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { RiNodejsFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { motion } from "framer-motion"

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
        },
    }
})

const Tech = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h2 
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: 1}}
            className='my-20 text-center text-4xl'>
                Technologies
            </motion.h2>
            <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 1.5}}
            className='flex flex-wrap items-center justify-center gap-4 pb-4'>
                <motion.div 
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                        <RiHtml5Fill className='text-7xl text-orange-600' />
                </motion.div>
                <motion.div
                    variants={iconVariants(2.9)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                        <IoLogoCss3 className='text-7xl text-blue-600' />
                </motion.div>
                <motion.div
                    variants={iconVariants(3.8)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                        <RiTailwindCssFill className='text-7xl text-cyan-600' />
                </motion.div>
                <motion.div
                    variants={iconVariants(2.3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                        <FaJsSquare className='text-7xl text-yellow-400' />
                </motion.div>
            </motion.div>
            <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 1.5}}
            className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div 
                    variants={iconVariants(4.1)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                        <RiReactjsFill className='text-7xl text-cyan-400' />
                </motion.div>
                <motion.div 
                    variants={iconVariants(3.6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                        <RiNodejsFill className='text-7xl text-green-600' />
                </motion.div>
                <motion.div 
                    variants={iconVariants(3.9)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                        <FaPython className='text-7xl text-yellow-600' />
                </motion.div>
                <motion.div 
                    variants={iconVariants(4.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiMysql className='text-7xl text-white-600' />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Tech