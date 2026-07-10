const Banner = () => {
    return(
        <section className="relative pt-40 h-[340px] w-full flex items-center justify-center overflow-hidden">
            
            <img 
                src="https://i.blogs.es/669147/ram-s6-key--rt-1920x1080/1366_2000.jpeg" 
                alt="Rick and Morty Background"
                className="h-[300px] absolute top-0 left-0 w-full h-full object-cover object-top opacity-50 z-0"
            />

            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/70 to-transparent z-0"></div>
            <div className="absolute inset-0 bg-black/40" />
            
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-2xl mx-auto">

                <h1 className="text-5xl md:text-7xl font-black text-white">
                    Rick & Morty
                </h1>

                <p className="mt-5 text-lg md:text-xl text-gray-200">
                    Explora personajes, especies, dimensiones y mucho más utilizando la Rick and Morty API.
                </p>

                {/* <button className="bg-[#88e23b] text-black font-semibold px-6 py-3 rounded-full hover:bg-[#97ce4c] transition-all shadow-lg shadow-[#88e23b]/20">
                    Explorar personajes
                </button> */}

            </div>

        </section>
    )
}

export default Banner;