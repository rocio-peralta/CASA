import Navbar from './Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="grid grid-cols-4 font-typographicSecondary text-8xl md:text-red-500 sm:text-orange-300 lg:text-lime-300 xl:text-teal-400 font-medium text-secondaryColor">
        <div className="col-span-3 pt-10 overflow-hidden">
          <h1 className="p-5 animate-reveal">DESIGNED</h1>
        </div>
        <div className="pt-10 overflow-hidden">
          <h1 className="grid justify-items-end p-5 pl-5 pr-5 animate-reveal">
            AND
          </h1>
        </div>
        <div className="col-start-1 col-end-5 overflow-hidden">
          <h1 className="grid justify-items-end pl-5 pr-5 animate-reveal">
            CRAFTED IN THE
          </h1>
        </div>
        <div className="col-start-3 col-end-5 pt-4 overflow-hidden">
          <h1 className="grid justify-items-end  text-secondaryColor font-typographicTertiary font-thin line-through pr-5 animate-reveal">
            BAY OF PLENTY
          </h1>
        </div>
      </section>
    </>
  )
}

export default Home
