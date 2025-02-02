import gsap from "gsap";
import { useRef } from "react";
import Button from "./Button";
import AnimatedTitle from "./AnimatedTitle";

const FloatingImage = () => {
  const frameRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <div id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[10px]"></p>

        <div className="relative flex justify-center items-center size-full">
          {/* Animated title */}
          <AnimatedTitle
            title="excellency in every detail"
            containerClass="mt-5 pointer-events-none relative z-10"
          />

          {/* Image Container */}
          <div className="story-img-container">
            <div className="story-img-content">
              {/* Center the image and make it smaller */}
              <img
                ref={frameRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseLeave}
                onMouseEnter={handleMouseLeave}
                src="/img/entrance.jpg"
                alt="entrance.webp"
                className="object-contain mx-auto w-full md:w-5/6"

              // Adjust size and ensure it's centered
              />
            </div>
          </div>
        </div>

        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
              Delivering innovative and impactful digital strategies that drive
              measurable results, engage audiences, and elevate brands to new
              heights in the ever-evolving digital landscape.
            </p>

            <Button id="realm-btn" title="BAKED MEDIA" containerClass="mt-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingImage;
