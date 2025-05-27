import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Feature from './components/Feature'
import Workflow from './components/Workflow'
import Price from './components/Price'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
    <Navbar/>
    <div className="max-w-7xl mx-auto pt-20 px-6"><Hero/></div>
    <Feature/>
    <Workflow/>
    {/* <Price/>
    <Testimonial/> */}
    <Footer/>

    </>
  )
}

export default App
