"use client"

import React from 'react';
import { gsap } from 'gsap/gsap-core';
import { useEffect } from 'react';

const Cursor = () => {

    useEffect(() => {
        const cursor = document.getElementById('custom-cursor')
        const links = document.querySelectorAll('a')
        const cursorText = document.querySelector('.cursor-text')
        const headingxxl = document.querySelectorAll(".heading-xxl");
        const headingxl = document.querySelector(".heading-xl");

        const onMouseMove = (event) => {
            const { clientX, clientY } = event
            gsap.set(cursor, {
                x: clientX,
                y: clientY
            })
        }

        const onMouseEnterheadingxxl = () => {
            gsap.to(cursor, { scale: 6, duration: 0.3 });
          };
          
          const onMouseEnterheadingxl = () => {
            gsap.to(cursor, { scale: 3, duration: 0.3 });
          };
      
          const onMouseLeaveheadingxxl = () => {
            gsap.to(cursor, { scale: 1, duration: 0.3 });
          };

          const onMouseLeaveheadingxl = () => {
            gsap.to(cursor, { scale: 1, duration: 0.3 });
          };

        const onMouseEnterLink = (event) => {
            const link = event.target;
            if(link.classList.contains('view')) {
                gsap.to(cursorText,{scale:4})
                cursorText.computedStyleMap.display = 'block'
            } else {
                gsap.to(cursor, {scale: 4})
            }
        }

        const onMouseLeaveLink = () => {
            gsap.to(cursor, {scale: 1})
            cursorText.computedStyleMap.display = 'none'
        }

        document.addEventListener('mousemove', onMouseMove)

        links.forEach(link => {
          link.addEventListener('mouseenter', onMouseEnterLink)
          link.addEventListener('mouseleave', onMouseLeaveLink)
        })

        headingxxl.forEach((heading) => {
          heading.addEventListener("mouseenter", onMouseEnterheadingxxl);
          heading.addEventListener("mouseleave", onMouseLeaveheadingxxl);
        });

        if (headingxl) {
            headingxl.addEventListener("mouseenter", onMouseEnterheadingxl);
            headingxl.addEventListener("mouseleave", onMouseLeaveheadingxl);
          }
    })

    return (
        <div id='custom-cursor' className='custom-cursor'>
            <span className='cursor-text'>View</span>
        </div>

    )
}

export default Cursor