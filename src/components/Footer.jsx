import { resourcesLinks, platformLinks, communityLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
  <div className="text-center text-white">
    <h2 className="text-lg font-medium">Crafted with love</h2>

    <div className="mt-2 mx-auto w-20 h-0.5 bg-teal-500 rounded-full"></div>

    <div className="mt-4 flex justify-center items-center gap-2 text-sm text-neutral-300">
      {/* Envelope Mail Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-teal-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.5 6 7.5-6M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
        />
      </svg>

      {/* Email Address */}
      <a href="mailto:nainatiwari080105@gmail.com" className="hover:underline">
        nainatiwari080105@gmail.com
      </a>
    </div>
  </div>
</footer>


  );
};

export default Footer;
