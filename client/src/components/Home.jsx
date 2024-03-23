import Navbar from './Navbar'
import Transition from './Transition'
import {motion} from 'framer-motion'

const Home = () => {
  return (
    <>
      <Navbar />

      <motion.section className="grid grid-cols-1 sm:grid-cols-4 font-typographicSecondary text-4xl sm:text-6xl font-medium text-secondaryColor">
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
        <Transition />
      </section>

    </>
  )
}

export default Home
