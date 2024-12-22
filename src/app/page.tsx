"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HomePage: React.FC = () => {
  const subheadingRef = useRef<HTMLHeadingElement>(null);
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Animation for subheading (on page load)
    gsap.fromTo(
      subheadingRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );

    // Scroll-triggered animation for the about section
    gsap.fromTo(
      aboutSectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutSectionRef.current,
          start: "top 80%", // When the top of the section reaches 80% of the viewport
        },
      }
    );

    // Scroll-triggered animation for the projects section
    gsap.fromTo(
      projectsSectionRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectsSectionRef.current,
          start: "top 80%",
        },
      }
    );

    // Scroll-triggered animation for the contact section
    gsap.fromTo(
      contactSectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactSectionRef.current,
          start: "top 90%",
        },
      }
    );
  }, []);

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <h1 className="font-bold text-7xl">Welcome</h1>
        <h4 ref={subheadingRef} className="font-semibold text-2xl ml-2">
          to my portfolio.
        </h4>
      </div>

      <div
        ref={aboutSectionRef}
        className="about-section mt-10 p-5 bg-gray-100 rounded-lg shadow-md"
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg">
          Hi, I'm Archisman Dey. I am a full stack developer with 2 years of
          experience in building web applications. I specialize in both frontend
          and backend development, and I am passionate about creating efficient
          and scalable solutions.
        </p>
      </div>

      <div
        ref={projectsSectionRef}
        className="projects-section mt-10 p-5 bg-gray-100 rounded-lg shadow-md"
      >
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="project-card p-5 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Project 1</h3>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
              pur
            </p>
          </div>
          <div className="project-card p-5 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Project 2</h3>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
              pur
            </p>
          </div>
          <div className="project-card p-5 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Project 3</h3>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
              pur
            </p>
          </div>
        </div>
      </div>

      <div
        ref={contactSectionRef}
        className="contact-section mt-10 p-5 bg-gray-100 rounded-lg shadow-md"
      >
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-lg">
          If you want to get in touch with me, feel free to send me an email at
          <span className="text-blue-500"> </span> or connect with me on
          <span className="text-blue-500"> LinkedIn</span>.
        </p>
      </div>
    </>
  );
};

export default HomePage;
