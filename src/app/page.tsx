"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../app/style.css';

const HomePage: React.FC = () => {
  const subheadingRef = useRef<HTMLHeadingElement>(null);
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);
  const redCircleRef = useRef<HTMLDivElement>(null);
  const yellowCircleRef = useRef<HTMLDivElement>(null);
  const purpleCircleRef = useRef<HTMLDivElement>(null);

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

    gsap.to(redCircleRef.current, {
      opacity: 1,
      duration: 7,
      ease: "power1.out",
    });
    gsap.to(yellowCircleRef.current, {
      opacity: 1,
      duration: 3,
      ease: "power3.out",
    });
    gsap.to(purpleCircleRef.current, {
      opacity: 1,
      duration: 5,
      ease: "power3.out",
    });

    // Scroll-triggered animation for the red circle
    gsap.to(redCircleRef.current, {
      y: 500,
      x: -300,
      ease: "expo.inOut",
      duration: 2,
      scrollTrigger: {
        trigger: redCircleRef.current,
        start: "top 20%",
        end: "bottom 20%",
        // scrub: true,
      },
    });

    gsap.to(purpleCircleRef.current, {
      y: 600,
      x: -300,
      ease: "expo.inOut",
      duration: 2,
      scrollTrigger: {
        trigger: redCircleRef.current,
        start: "top 20%",
        end: "bottom 20%",
        // scrub: true,
      },
    });

  }, []);

  return (
    <>
      <div>

        <div className="bg-circle-red" ref={redCircleRef}>
          <svg height="100" width="100">
            <circle cx="50" cy="50" r="40" fill="red" />
          </svg>
        </div>
        <div className="bg-circle-yellow" ref={yellowCircleRef}>
          <svg height="100" width="100">
            <circle cx="50" cy="50" r="40" fill="yellow" />
          </svg>
        </div>
        <div className="bg-circle-purple" ref={purpleCircleRef}>
          <svg height="100" width="100">
            <circle cx="50" cy="50" r="40" fill="purple" />
          </svg>
        </div>

        <div className="flex justify-center items-center h-screen hero-bg px-5 sm:px-10">
          <h1 className="font-bold text-5xl sm:text-7xl lg:text-8xl heading-xxl">Welcome</h1>
          <h4 ref={subheadingRef} className="font-semibold text-xl sm:text-2xl ml-2 heading-xl">
            to my portfolio.
          </h4>
        </div>
      </div>

      <div className="flex justify-center items-center h-screen px-5 sm:px-10 hero-bg">
        <h1 className="font-bold text-5xl sm:text-8xl heading-xxl">
          Hiding
        </h1>
        <div className="text-center heading-xxl">
          <span className="block font-extrabold text-gray-200 text-3xl sm:text-4xl px-5">bad codes</span>
        </div>
        <h1 className="font-bold text-5xl sm:text-8xl heading-xxl">
          since 2019
        </h1>
      </div>


      <div
        ref={aboutSectionRef}
        className="about-section mt-10 p-5 sm:p-8 bg-gray-100 rounded-lg shadow-md"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">About Me</h2>
        <p className="text-base sm:text-lg">
          Hi, I&apos;m Archisman Dey. I am a full stack developer with 2 years of
          experience in building web applications. I specialize in both frontend
          and backend development, and I am passionate about creating efficient
          and scalable solutions.
        </p>
      </div>

      <div
        ref={projectsSectionRef}
        className="projects-section mt-10 p-5 sm:p-8 bg-gray-100 rounded-lg shadow-md"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="project-card p-5 bg-white rounded-lg shadow-md">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Project 1</h3>
            <p className="text-lg sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
              pur
            </p>
          </div>
          <div className="project-card p-5 bg-white rounded-lg shadow-md">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Project 2</h3>
            <p className="text-lg sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
              pur
            </p>
          </div>
          <div className="project-card p-5 bg-white rounded-lg shadow-md">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Project 3</h3>
            <p className="text-lg sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
              pur
            </p>
          </div>
        </div>
      </div>

      <div
        ref={contactSectionRef}
        className="contact-section mt-10 p-5 sm:p-8 bg-gray-100 rounded-lg shadow-md"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-base sm:text-lg">
          If you want to get in touch with me, feel free to send me an email at
          <span className="text-blue-500"> archis03007@gmail.com </span> or connect with me on
          <span className="text-blue-500"> <a href="https://www.linkedin.com/in/archisman-dey/"> LinkedIn </a> </span>.
        </p>
      </div>
    </>
  );
};

export default HomePage;
