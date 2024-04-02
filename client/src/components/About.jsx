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
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-8 font-typographicSecondary text-lg sm:text-2xl text-secondaryColor items-end">
          <div className="col-span-1 sm:col-span-3 sm:col-start-6 sm:pt-10">
            <h1 className="pl-5 sm:p-5 ">
              Our Online Design Tool it’s a simple as dragging our pre-design
              modules into the center of your screen and configuring them how
              you like.
            </h1>
          </div>

          <div className="grid justify-items-start sm:col-start-6 pl-5 sm:col-end-9 pt-4 overflow-hidden hover:animate-bounce ">
            <Link to="/about">
              <h1 className="font-typographicTertiary text-xl sm:text-3xl font-thin ">
                About us
              </h1>
              <div className="pt-3 sm:col-start-6">
                <img className="" src="/images/line.svg" alt="line"></img>
              </div>
            </Link>
          </div>

          <div className="sm:col-start-1 sm:col-end-4  bg-slate-400 ">
            <img className="" src="/images/concrete.jpeg" alt="wood" />
          </div>
          <div className="grid items-end sm:col-start-7 sm:col-end-9 h-64 -mr-10 bg-slate-600">
           
          </div>
        </div>
      </div>
    </>
  )
}

export default About
