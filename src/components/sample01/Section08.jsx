import React from 'react'
import { motion } from 'framer-motion'

const Section08 = () => {

    const icon = {
        hidden: {
            pathLength: 0,
            fill: "rgba(255, 255, 255, 0)"
        },
        visible: {
            pathLength: 1,
            fill: "rgba(255, 255, 255, 1)"
        }
    }

    return (
        <section id='section08' className='react__item'>
            <span className='num'>08. svg</span>
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                className="circle8"
            >
                <motion.path
                    d="M9 89.5V13.5H80.5V85L60 56.5L40.5 85L32.5 46.5L9 89.5Z"
                    variants={icon}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        default: { duration: 2, ease: "easeInOut" },
                        fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                    }}
                />
            </motion.svg>
        </section>
    )
}

export default Section08
