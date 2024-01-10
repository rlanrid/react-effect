import React from 'react'
import { motion } from 'framer-motion'

const Section01 = () => {
    return (
        <section id='section01' className='react__item'>
            <span className='num'>01. animate</span>
            <motion.div
                className="circle"
                animate={{
                    x: 300,
                    y: 300,
                    scale: 0.4,
                    borderRadius: 10,
                }}
            >
            </motion.div>
        </section>
    )
}

export default Section01
