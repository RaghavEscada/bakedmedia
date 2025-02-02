import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";
import { useEffect, useRef, useState } from "react";

import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);

  const videoRef = useRef(null);

  const handleVideoLoad = () => {
    setLoaded(true);
    setLoading(false);
  };

  useEffect(() => {
    if (loaded) {
      gsap.set("#video-frame", {
        clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
        borderRadius: "0% 0% 40% 10%",
      });
      gsap.from("#video-frame", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        borderRadius: "0% 0% 0% 0%",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#video-frame",
          start: "center center",
          end: "bottom center",
          scrub: true,
        },
      });
    }
  }, [loaded]);

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {loading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          {/* Loader */}
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}

      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <video
          ref={videoRef}
          src="videos/bm.mp4" // Replace with the desired video source
          autoPlay
          loop
          muted
          className="absolute left-0 top-0 size-full object-cover object-center"
          onLoadedData={handleVideoLoad}
        />

        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          experiences.
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              Elevating
            </h1>

            <p className="mb-5 max-w-64 font-bold text-blue-75 text-2xl">
              At{" "}
              <span className="font-extrabold text-gradient bg-clip-text text-transparent bg-red-600">
                Baked Media
              </span>
              , we create innovative digital solutions that ignite creativity and
              drive success.
            </p>

            <a
  href="https://www.google.com/maps/place/GENVIO+PRODUCTIONS/@12.9064548,77.6075155,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae15a0ccfdad87:0xe97d05192065191f!8m2!3d12.9064548!4d77.6075155!16s%2Fg%2F11g4fhr9rc?hl=en-IN&entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-1 px-3 py-1 text-sm bg-yellow-300 rounded-full shadow-md hover:bg-yellow-400 transition"
>
  <TiLocationArrow className="text-base" />
  <span>Bangalore 📍</span>
</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
