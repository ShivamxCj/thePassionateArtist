import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"
import video3 from "../assets/video3.mp4"



const Hero = () => {
  return (
    <section id="hero" className="scroll-mt-20">
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-3xl sm:text-6xl lg:text-7xl text-center tracking-wide leading-relaxed">
            The Passionate 
            <span className="bg-gradient-to-r from-teal-400 to-teal-600 text-transparent bg-clip-text">{""} Artist</span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
            Seeing beauty in chaos, designing with heart and imagination
            <span className="text-white bg-clip-text">{""} <br /> 
            Naina Tiwari | 
            <span className="bg-gradient-to-r from-teal-500 to-teal-700 text-transparent bg-clip-text"> NID AHMEDABAD</span>
            </span>
            </p>
        
        <div className="flex mt-10 justify-center">
            <video autoPlay loop muted className="w-1/3 rounded-lg border border-teal-500 shadow-teal-600 mx-2 my-4">
            <source src={video1} type="video/mp4"/>
            Your browser doesn't support the video tag.
            </video>

            <video autoPlay loop muted className="w-1/3 rounded-lg border border-teal-500 shadow-teal-600 mx-2 my-4">
            <source src={video2} type="video/mp4"/>
            Your browser doesn't support the video tag.
            </video>

            <video autoPlay loop muted className="w-1/3 rounded-lg border border-teal-500 shadow-teal-600 mx-2 my-4">
            <source src={video3} type="video/mp4"/>
            Your browser doesn't support the video tag.
            </video>

        </div>
    </div>
    </section>
  )
}

export default Hero
