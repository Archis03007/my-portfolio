import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const skills = [
  "html", "css", "javascript", "typescript", "csharp", "python", "django", "angular", "svelte", "nextjs",
  "tailwindcss", "bootstrap", "nodejs", "express", "dotnet", "postgresql", "sqlserver",
  "mongodb", "git", "github", "azure", "gsap", "unity", "figma"
];

const Skills = () => {
  const [mounted, setMounted] = useState(false);
  const marqueeRef = useRef(null);

  // Set mounted to true after the component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  // Trigger GSAP animation once the component is mounted and marqueeRef exists
  useEffect(() => {
    if (mounted && marqueeRef.current) {
      gsap.to(marqueeRef.current, {
        x: "-100%",
        duration: 30,
        ease: "linear",
        repeat: -1,
      });
    }
  }, [mounted]);

  // Render a fallback until the component has mounted
  if (!mounted) {
    return (
      <div className="hero-bg py-32 relative overflow-hidden text-white">
        <h1 className="font-bold text-5xl mb-10 sm:text-7xl lg:text-8xl text-center">
          Skills
        </h1>
      </div>
    );
  }

  return (
    <div className="hero-bg py-32 relative overflow-hidden ">
 <h1 className="font-bold text-5xl mb-5 sm:text-7xl lg:text-8xl p-5">Skills</h1>
      <div className="relative w-full flex overflow-hidden whitespace-nowrap">
        <div ref={marqueeRef} className="flex gap-20 min-w-full">
          {[...skills, ...skills].map((skill, index) => (
            <img
              key={index}
              src={`/logos/${skill}.svg`}
              alt={skill}
              className="h-16 sm:h-24 md:h-28 object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
