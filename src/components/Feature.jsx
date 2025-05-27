import { features } from "../constants"
import img1 from "../assets/images/img1.jpg"
import img2 from "../assets/images/img2.jpg"
import img3 from "../assets/images/img3.jpg"
import img4 from "../assets/images/img4.jpg"
import img5 from "../assets/images/img5.jpg"
import img6 from "../assets/images/img6.jpg"

const Feature = () => {
  return (
    <section id="artworks" className="scroll-mt-20">
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <h2 className="text-xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">The Art 
            <span className="bg-gradient-to-r from-teal-400 to-teal-700 text-transparent bg-clip-text">{""} Room</span>
        </h2>
      </div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-5 gap-x-1 px-10 mt-10">
  {[img1, img2, img3, img4, img5, img6].map((img, index) => (
    <div
      key={index}
      className="w-full max-w-[350px] h-[250px] mx-auto rounded-md shadow-md border border-teal-500 overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:border-white"
    >
      <img
        src={img}
        alt={`Logo ${index + 1}`}
        className="w-full h-full object-cover"
      />
    </div>
  ))}
</div>




    </div>
    </section>
  )
}

export default Feature
 