import React, { useRef } from 'react'
import { motion } from 'framer-motion'

const Section07 = () => {
    const constraintsRef = useRef(null);

    return (
        <section id='section07' className='react__item'>
            <span className='num'>07. drag</span>
            <motion.div className="circle7" ref={constraintsRef}>
                <motion.div
                    className='circle7-1'
                    drag
                    dragConstraints={constraintsRef}
                >
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Section07
