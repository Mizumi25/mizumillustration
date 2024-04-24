import React, { useEffect } from 'react';
import './style.css';
import gsap, { CSSRulePlugin } from 'gsap/all';
import { useGSAP } from "@gsap/react";

const Entrance: React.FC = () => {
  
  useGSAP(() => {
    gsap.from(".letter", 0.8, {
      y: -20,
      opacity: 0,
      ease: "power3.inOut",
      stagger: 0.1,
    })
    
    gsap.to(".top-left, .top-right", 2, {
      top: 0,
      ease: "power3.inOut",
      delay: 2,
    })
    
    gsap.to(".bottom-right", 2, {
      bottom: 0,
      ease: "power3.inOut",
      delay: 2,
    })
    
    gsap.to(".top-left", 2, {
      left: 0,
      ease: "power3.inOut",
      delay: 4,
    })
    
    gsap.to(".top-right", 2, {
      right: 0,
      ease: "power3.inOut",
      delay: 4,
    })
    
    gsap.to(".bottom-right", 2, {
      right: 0,
      ease: "power3.inOut",
      delay: 4,
    })
    
    gsap.to(".block-left", 2, {
      left: "-50%",
      ease: "power3.inOut",
      delay: 4,
    })
    
    gsap.to(".block-right", 2, {
      right: "-50%",
      ease: "power3.inOut",
      delay: 4,
    })
    
    gsap.to(".top-right", 2, {
      autoAlpha: 0,
      ease: "power2.inOut",
      delay: 6,
    })
    
    gsap.to(".bottom-right", 2, {
      autoAlpha: 0,
      ease: "power2.inOut",
      delay: 6,
    })

    gsap.to(".top-left", 2, {
      scale: 0.5,
      ease: "power2.inOut",
      delay: 7,
    })
  })
  
  return (
    <div className="entrance">
      <div className="blocks">
        <div className="block block-left"></div>
        <div className="block block-right"></div>
      </div>
      <div className="letters">
        <div className="row">
          <div className="letter top-left">M</div>
          <div className="letter top-right">Z</div>
        </div>
        <div className="row">
          <div className="letter bottom-right">I</div>
        </div>
      </div>
    </div>
    )
}

export default Entrance;