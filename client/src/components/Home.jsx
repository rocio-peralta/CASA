import Borrador from './Borrador'
import Navbar from './Navbar'
import Transition from './Transition'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const Home = () => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    // the start of the target meet the end of the container
    offset: ['start end', 'end end'],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1])

  return (
    <>
      <Navbar />

      <motion.section
        style={{ opacity }}
        ref={targetRef}
        className="relative grid grid-cols-1 sm:grid-cols-4 font-typographicSecondary text-4xl sm:text-6xl font-medium text-secondaryColor"
      >
        <div className=" col-span-1 sm:col-span-3 sm:pt-10 overflow-hidden">
          <h1 className="pl-5 sm:p-5 animate-reveal">DESIGNED</h1>
        </div>
        <div className=" sm:pt-10 col-span-1 sm:col-start-4 sm:col-end-5 overflow-hidden">
          <h1 className="grid sm:justify-items-end pl-5 pr-5 sm:p-5 sm:pl-5   sm:pr-5 animate-reveal">
            AND
          </h1>
        </div>
        <div className="sm:col-start-1 sm:col-end-5 overflow-hidden">
          <h1 className="grid justify-items-end pl-5 pr-5 animate-reveal">
            CRAFTED IN THE
          </h1>
        </div>
        <div className="sm:col-start-3 sm:col-end-5 pt-4 overflow-hidden">
          <h1 className="grid justify-items-end font-typographicTertiary text-xl sm:text-3xl font-thin line-through pr-5 animate-reveal">
            BAY OF PLENTY
          </h1>
        </div>
      </motion.section>
      {/* <Transition /> */}
      <Borrador />
    </>
  )
}

export default Home
