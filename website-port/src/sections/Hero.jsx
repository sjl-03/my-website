const Hero = () => {
  return (
    <section className="min-h-screen border-2 w-full flex flex-col relative">
        <div className="w-full mx-auto lflex flex-col sm:mt-36 mt-20 c-space gap-3">
            <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">Hi, <span className="waving-hand">👋</span> I am</p>
            <p className="hero_tag text-gray_gradient text-center">Shenjun Lu</p>
        </div>

        <div className="w-full h-full absolute inset-0">
            
        </div>
    </section>
  )
}

export default Hero