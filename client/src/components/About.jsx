import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    // the start of the target meet the end of the container
    offset: ['start end', 'end end'],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1])
  return (
    <>
      <div>
        <motion.section
          style={{ opacity }}
          ref={targetRef}
          className="relative grid grid-cols-1 sm:grid-cols-5 font-typographicSecondary text-4xl sm:text-6xl font-medium text-secondaryColor"
        >
          <div className=" col-span-1 sm:col-span-3 sm:pt-10 overflow-hidden">
            <h1 className="pl-5 sm:p-5 animate-reveal">CUSTOMED</h1>
          </div>

          <div className="sm:col-start-1 sm:col-end-4 overflow-hidden">
            <h1 className="grid justify-items-end pl-5 pr-5 animate-reveal">
              UNIQUELY,
            </h1>
          </div>
          <div className="sm:col-start-4 sm:col-end-6 overflow-hidden">
            <h1 className="grid justify-items-end pl-5 pr-5 animate-reveal">
              CRAFTED
            </h1>
          </div>
          <div className="sm:col-start-3 sm:col-end-6 pt-4 overflow-hidden">
            <h1 className="grid justify-items-end font-typographicTertiary text-xl sm:text-3xl font-thin pr-5 animate-reveal">
              AND SECRETED
            </h1>
          </div>
        </motion.section>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-8 font-typographicSecondary text-lg sm:text-xl text-secondaryColor">
          <div className=" col-span-1 sm:col-span-3 sm:pt-10">
            <h1 className="pl-5 sm:p-5 text-justify">
              Our Online Design Tool it’s a simple as dragging our pre-design
              modules into the center of your screen and configuring them how
              you like.
            </h1>
          </div>
          <div className="sm:col-start-2 sm:col-end-4 pt-4 overflow-hidden ">
            <Link to="/about">
              <h1 className="grid justify-items-end font-typographicTertiary text-xl sm:text-3xl font-thin pr-5">
                About us
              </h1>
            </Link>
            <div className="sm:col-start-2 sm:col-end-4 grid justify-items-end mt-3">
              <img className="" src="/images/line.svg" alt="line"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
