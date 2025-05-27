import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";
import { socialLinks } from "../constants";
const Workflow = () => {
  return (
    <section id="links" className="scroll-mt-20">
    <div className="mt-20 ">
      <h2 className="text-2xl sm:text-4xl lg:text-5xl text-center mt-6 tracking-wide">
        Connect With
        <span className="bg-gradient-to-r from-teal-500 to-teal-800 text-transparent bg-clip-text">
          {""} Me
        </span>
      </h2>
      <div className="flex flex-col space-y-4 mt-10 px-4 max-w-md mx-auto">
        {socialLinks.map(({ id, img, url, text }) => (
          <div
            key={id}
            className="flex items-center justify-between border border-gray-300 rounded-md p-4 hover:shadow-md transition-shadow"
          >
            <img src={img} alt={text} className="w-16 h-16 object-contain" />
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 font-semibold hover:underline"
            >
              {text}
            </a>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Workflow;
