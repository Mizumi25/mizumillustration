import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import gsap, { CSSRulePlugin } from 'gsap/all';
import { useGSAP } from "@gsap/react";





const Header: React.FC = () => {
  
 gsap.registerPlugin(CSSRulePlugin); 

const nav = useRef();
const toggleBtn = useRef();
const hamBurger = useRef();


const path = useRef();
useGSAP(( contextSafe ) => {
    const tl = gsap.timeline({ paused: true });
    
    let spanBefore = CSSRulePlugin.getRule("#hamburger span:before");

    gsap.set(spanBefore, { background: "#000" });
    gsap.set(".menu", { visibility: "hidden" });
    
    
    
    const revealMenuItems = () => {
      const start = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
      const end = "M0,1005S175,995,500,995s500,5,500,5V0H0Z";
      
      const power2 = "power2.inOut";
      const power4 = "power4.inOut";
      
      tl.to("#hamburger", 1.25, {
        marginTop: "-5px",
        x: -40,
        y: 40,
        ease: power4,
      });
      
      tl.to("#hamburger span", 1, {
        background: "red",
        rotation: 45, 
        ease: power2,
      }, "<");
      tl.to(spanBefore, 1, {
        background: "red",
        rotation: -45,
        ease: power2,
      }, "<");
    
     tl.to(".toggle-btn .btn-outline", 1.25, {
        x: -40,
        y: 40,
        width: "140px",
        height: "140px",
        border: "1px solid red",
        ease: power4,
      }, "<");
      
      tl.to(".toggle-btn .btn-outline", 1.25, {
        x: -40,
        y: 40,
        width: "140px",
        height: "140px",
        border: "1px solid red",
        ease: power4,
      }, "<");
      
          tl.to(path.current, 0.8, {
        attr: {
          d: start,
        },
        ease: "power2.easeIn",
      }, "<").to(path.current, 0.8, {
        attr: {
          d: end,
        },
        ease: "power2.easeIn",
      }, "-=0.5");
      
      
      tl.to(".menu", 1, {
        visibility: "visible",
      }, "-=0.5")
      
      tl.to(".menu-item > a", 1, {
        top: 0,
        ease: "power3.out",
        stagger: {
          amount: 0.5,
        },
      }, "-=1").reverse();
    }
  

      
  
    const revealMenu = () => {
      revealMenuItems();
      
     toggleBtn.current.onclick = function(e) {
      hamBurger.current.classList.toggle("active");
      tl.reversed(!tl.reversed());
      };
    }
    revealMenu();
    
    
  }, { scope: nav });
 


 
    
   
  
  
  return (
    <div ref={nav}>
      <div ref={toggleBtn} className="toggle-btn" id="toggle-btn">
        <div className="btn-outline btn-outline-1"></div>
        <div className="btn-outline btn-outline-2"></div>
        <div ref={hamBurger} id="hamburger">
          <span></span>
        </div>
      </div>
    
      <div className="overlay">
        <svg viewBox="0 0 1000 1000">
          <path ref={path} d="M0 2S175 1 500 1s500 1 500 1V0H0Z"></path>
        </svg>
      </div>
      
      <div className="menu">
        <div className="primary-menu">
          <div className="menu-container">
            <div className="wrapper">
              <div className="menu-item">
                <a href="#"><span>I</span>Home</a>
                <div className="menu-item-revealer"></div>
              </div>
              
              <div className="menu-item">
                <a href="#"><span>II</span>Works</a>
                <div className="menu-item-revealer"></div>              
              </div>
              
              <div className="menu-item">
                <a href="#"><span>III</span>Services</a>
                <div className="menu-item-revealer"></div>              
              </div>
            </div>
          </div>
        </div>
        
        
       <div className="secondary-menu">
          <div className="menu-container">
            <div className="wrapper">
              <div className="menu-item">
                <Link to="/arts">Arts</Link>
                <div className="menu-item-revealer"></div>
              </div>
              
              <div className="menu-item">
                <Link to="/music">Music</Link>
                <div className="menu-item-revealer"></div>              
              </div>
              
              <div className="menu-item">
                <Link to="/code">Code</Link>
                <div className="menu-item-revealer"></div>              
              </div>
            </div>
            
            <div className="wrapper">
              <div className="menu-item">
                <a href="#">@MizumiKaito</a>
                <div className="menu-item-revealer"></div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    )
};

export default Header;