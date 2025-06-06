import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            {/* <span className="text-xl tracking-tight">The Passiona</span> */}
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((items, index) => (
              <li
                key={index}
                className="hover:text-teal-600 ease-in-out duration-200"
              >
                <a href={items.href}>{items.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a
              href="mailto:nainatiwari080105@gmail.com"
              className="bg-gradient-to-r from-teal-500 to-teal-800 text-white py-2 px-3 rounded-md
             hover:bg-none hover:bg-transparent hover:text-teal-400 transition duration-300"
            >
              Contact me
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
          {/* ------------------------------------mobile view drawer-------------------------------------------- */}
          {mobileDrawerOpen && (
            <div className="fixed top-0 right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
              <button
                onClick={() => setMobileDrawerOpen(false)}
                className="absolute top-4 right-4 text-white text-2xl"
                aria-label="Close menu"
              >
                &times;
              </button>
              <ul>
                {navItems.map((item, index) => (
                  <li key={index} className="py-4 hover:text-teal-600 ease-in-out duration-200">
                    <a href={item.href} onClick={() => setMobileDrawerOpen(false)}>{item.label}</a>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-6">
                <a
                  href="mailto:nainatiwari080105@gmail.com"
                  className="py-2 px-3 border rounded-md bg-gradient-to-r from-teal-500 to-teal-800"
                >
                  Contact me
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
