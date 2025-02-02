import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import { FaWhatsapp, FaEnvelope, FaClock, FaInstagram } from "react-icons/fa"; // Importing Instagram icon

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            DISCUSS ABOUT YOUR PROJECT WITH US
          </p>

          <AnimatedTitle
            title="let&#39;s b<b>u</b>ild the <br /> new era of <br /> Digital presence t<b>o</b>gether."
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          <Button
            title="baked media"
            containerClass="mt-10 cursor-pointer"
            onClick={() => {
              const phoneNumber = "+919902656496"; // Replace with your actual phone number
              const message = "Hello, I'd like to discuss my project!"; // Predefined message
              const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

              // Open WhatsApp in a new window
              window.open(url, "_blank");
            }}
          />

          {/* Contact Icons Section */}
          <div className="mt-10 flex space-x-8">
            <a href="https://wa.me/919880186496" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-3xl text-white cursor-pointer hover:text-green-500" />
            </a>
            <a href="mailto:bake@bakedmedia.in" target="_blank" rel="noopener noreferrer">
              <FaEnvelope className="text-3xl text-white cursor-pointer hover:text-red-500" />
            </a>
            
            {/* Instagram Icon */}
            <a href="https://www.instagram.com/bakedmedia.in/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-3xl text-white cursor-pointer hover:text-pink-500" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
