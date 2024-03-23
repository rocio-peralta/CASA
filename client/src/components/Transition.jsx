import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const Transition = () => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    // the start of the target meet the end of the container
    offset: ['start end', 'end end'],
  })
  //This is a variable or value representing the progress of scrolling on the Y-axis.
  // the first array is the range of the scrollYProgress, the second array is the range of the opacity.
  // firs array indi
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.3, 1])
  const x = useTransform(
    scrollYProgress,
    [0.1, 0.25, 0.7, 1],
    ['0%', '-55%', '"-60%', '-80%']
  )
  return (
    <div className="col-span-1 sm:col-start-4 sm:col-end-5 ">
      {/* <motion.img
          style={{ opacity, x }}
          ref={targetRef}
          className="justify-end pt-20"
          src="/images/wood.jpeg"
          alt="Wood"
        ></motion.img> */}
      <img
        src="/images/wood.jpeg"
        alt="Wood"
        className="justify-end pt-20"
      ></img>
    </div>
  )
}

export default Transition
