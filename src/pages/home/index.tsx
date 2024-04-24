import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import { homedata } from '../../content_inputs';
import gsap, { CSSRulePlugin } from 'gsap/all';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { lenis } from 'freight/lenis'

import Background from '../../assets/videos/back.mp4';
import Profile from '../../assets/images/profile.jpg';

const Home: React.FC = () => {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);
  const section5Ref = useRef<HTMLDivElement>(null);
  const section6Ref = useRef<HTMLDivElement>(null);
  
  
  const [scrollColor, setScrollColor] = useState<{ r: number; g: number; b: number }>({ r: 255, g: 255, b: 255 });
  const [sectionOpacity, setSectionOpacity] = useState<{ [key: string]: number }>({
  first: 1,
  second: 0,
});
  const [mixBlend, setMixBlend] = useState<string>("screen");
  const [pointer, setPointer] = useState<string>("none");

useEffect(() => {
  const handleScrollOpacity = () => {
    const scroll_threshold = 1; 
    const scroll_threshold1 = 14; 
    const y = 1 + (window.scrollY || window.pageYOffset) / scroll_threshold;
    const z = 1 + (window.scrollY || window.pageYOffset) / scroll_threshold1;

    setSectionOpacity({
      ...sectionOpacity,
      first: y > scroll_threshold ? 0 : 1,
      second: y > scroll_threshold ? 1 : 0,
    });
    setPointer(y > scroll_threshold ? "auto" : "none")
    setMixBlend(z > scroll_threshold1 ? "normal" : "screen");
  };
  window.addEventListener('scroll', handleScrollOpacity);  
  return () => {
    window.removeEventListener('scroll', handleScrollOpacity);
  };
}, []);

useEffect(() => {
  console.log(sectionOpacity); 
  console.log(mixBlend)
}, [sectionOpacity]);


  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (window.scrollY || window.pageYOffset) / totalHeight;

      setScrollColor(prevColor => {
      let r, g, b;

      if (scrollProgress < 0.5) {
        const scrollProgressBlack = scrollProgress * 5;
        r = 255 - Math.round(255 * scrollProgressBlack);
        g = 255 - Math.round(255 * scrollProgressBlack);
        b = 255 - Math.round(255 * scrollProgressBlack);
      } else {
        const scrollProgressWhite = (scrollProgress - 0.5) * 2;
        r = Math.round(255 * scrollProgressWhite);
        g = Math.round(255 * scrollProgressWhite);
        b = Math.round(255 * scrollProgressWhite);
      }

      const newState = { r, g, b };
       return newState;
    });
    };
    if (section1Ref.current && section2Ref.current && section3Ref.current && section4Ref.current && section5Ref.current && section6Ref.current) {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }
  }, []);
  
  
  useEffect(() => {
        if (section1Ref.current) {
          section1Ref.current.style.opacity = `${sectionOpacity.first}`;
        }
        if (section2Ref.current) {
          section2Ref.current.style.opacity = `${sectionOpacity.second}`;
          section2Ref.current.style.mixBlendMode = `${mixBlend}`;
          section2Ref.current.style.pointerEvents = `${pointer}`;
        }
        if (section3Ref.current) {
          section3Ref.current.style.opacity = `${sectionOpacity.second}`;
        }
  }, [sectionOpacity]);
  
  
  useEffect(() => {
  if (section2Ref.current) {
    section2Ref.current.style.background = `rgb(${scrollColor.r}, ${scrollColor.g}, ${scrollColor.b})`;
    section2Ref.current.style.color = `rgb(${255 - scrollColor.r}, ${255 - scrollColor.g}, ${255 - scrollColor.b})`;
  }
  if (section3Ref.current) {
    section3Ref.current.style.background = `rgb(${scrollColor.r}, ${scrollColor.g}, ${scrollColor.b})`;
    section3Ref.current.style.color = `rgb(${255 - scrollColor.r}, ${255 - scrollColor.g}, ${255 - scrollColor.b})`;
  }
  if (section4Ref.current) {
    section4Ref.current.style.background = `rgb(${scrollColor.r}, ${scrollColor.g}, ${scrollColor.b})`;
    section4Ref.current.style.color = `rgb(${255 - scrollColor.r}, ${255 - scrollColor.g}, ${255 - scrollColor.b})`;
  }
  if (section5Ref.current) {
    section5Ref.current.style.background = `rgb(${scrollColor.r}, ${scrollColor.g}, ${scrollColor.b})`;
    section2Ref.current.style.color = `rgb(${255 - scrollColor.r}, ${255 - scrollColor.g}, ${255 - scrollColor.b})`;
  }
  if (section6Ref.current) {
    section6Ref.current.style.background = `rgb(${scrollColor.r}, ${scrollColor.g}, ${scrollColor.b})`;
    section2Ref.current.style.color = `rgb(${255 - scrollColor.r}, ${255 - scrollColor.g}, ${255 - scrollColor.b})`;
  }
  const section6Top = section6Ref.current.offsetTop;
      if (window.scrollY > section6Top - window.innerHeight / 2) {
        // Update styles when reaching section 6
      }
  }, [scrollColor]);
  
  //magnet
  const magnet = useRef<HTMLDivElement>(null);
  const magText = useRef<HTMLDivElement>(null);
  const dbgr = useRef<HTMLDivElement>(null);
  
  const [isActivated, setIsActivated] = useState(false);

  const activateMagneto = () => {
    setIsActivated(true);
    console.log("yes")
    
    let boundBox = magnet.getBoundingClientRec();
    const magnetoStrength = 40;
    const magnetoTextStrength = 80;
    const newX = ((e.clientX - boundBox.left)/magnet.offsetWidth) - 0.5;
    const newY = ((e.clientY - boundBox.left)/magnet.offsetWidth) - 0.5;
    
    useGSAP(() => {
      gsap.to(magnet, {
        duration: 1,
        x: newX * magnetoStrength,
        y: newY * magnetoStrength,
        ease: Power4.easeOut
      })
    })
    
    useGSAP(() => {
      gsap.to(magText, {
        duration: 1,
        x: newX * magnetoTextStrength,
        y: newY * magnetoTextStrength,
        ease: Power4.easeOut
      })
    })
    
  };

  const resetMagneto = () => {
    setIsActivated(false);
    console.log("no")
  };
  
  
  
  
  //imgScroll Trigger
    const exh = useRef<HTMLDivElement>();
    const exh1 = useRef<HTMLDivElement>();
    useGSAP(() => {
      gsap.registerPlugin( ScrollTrigger ); 
      
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: exh.current,
          start: "-400% center",
          end: "bottom center",
          scrub: false,
          markers: true,
          toggleActions: "play pause reverse pause",
        }
      })
      tl.to(exh.current, {
        x: -500,
        y: -300,
        scale: 1.5,
        rotate: -125,
        duration: 0.8,
      })
      
      
      let tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: exh1.current,
          start: "-400% center",
          end: "bottom center",
          scrub: false,
          markers: true,
          toggleActions: "play pause reverse pause",
        }
      })
      tl1.to(exh1.current, {
        x: -500,
        y: -400,
        scale: 1.5,
        rotate: -190,
        duration: 0.8,
      })
    }, { scope:exh });




    useGSAP(() => {
      let images = gsap.utils.toArray('#section5 .animated__exh img')

      images.forEach(image => {
          gsap.to(image, {
            yPercent: -100 * image.dataset.speed,
            ease: "none",
            scrollTrigger:{
              scrub: image.dataset.speed
            }
          })
      })
    })


    
    

//Object Destructuring
const { description1, description2, description3, description4, description5, description6, description7, description8, } = homedata;





  return (
    <section id="Home">
      <video className="background-hero" src={Background} muted autoPlay loop></video>

      <div id="section1" className="section" ref={section1Ref}>
        <div id="container">
          <h1 id="text1"></h1>
          <h1 id="text2"></h1>
          <div className="box box1"></div>
          <div className="box box2"></div>
          <div className="box box3"></div>
          <div className="box box5"></div>
        </div>
        <svg id="filters">
          <defs>
            <filter id="threshold">
              <feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0
                            0 1 0 0 0
                            0 0 1 0 0
                            0 0 0 255 -140" />
            </filter>
          </defs>
        </svg>
        <a href="#" className="button type--A">
          <div className="button__line"></div>
          <div className="button__line"></div>
          <span className="button__text">HIRE ME</span>
          <div className="button__drow1"></div>
          <div className="button__drow2"></div>
        </a>
      </div>
      

      <div id="section2" className="section" ref={section2Ref}>
        <div id="content">
          <div className="nn">
            <div className="wrapper">
              <img src={Profile} alt="profile" />
            </div>
          </div>
          <h2>{description1}</h2>
          <hr /><p>{description2}</p>
          <h2>{description3}</h2>
          <hr /><p>{description4}</p>
          <h2>{description5}</h2>
          <hr /><p>{description6}</p>
          <a href="#service" className="scroll-down">
            <img src="./mats/scroll-down.svg" width="40" height="66" alt="mouse scroll"/>
          </a>
        </div>
        
        <button  onMouseMove={activateMagneto} 
      onMouseLeave={resetMagneto}  className="magneto">
          <span ref={magText} className="text">MyArts</span>
        </button>
        <div ref={dbgr} id="debugger"></div>
      </div>

      <div id="section3" className="section" ref={section3Ref}>
        <div id="content">
          <div className="title">
            <h2 className="">Projects</h2>
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <line className="path" x1="0" y1="50" x2="100" y2="50" stroke="black" />
            </svg>
          </div>
          <ol type="number">
            <li>I am the first title</li>
            <li>I am the second title</li>
            <li>I am the third title</li>
            <li>I am the fourth title</li>
            <li>I am the fifth title</li>
          </ol>
        </div>
      </div>

      <div id="section4" className="section" ref={section4Ref}>
        <div id="content">
          <div className="title">
            <h2 className="">Brief Intro</h2>
            <hr />
          </div>
          <div className="exhibit" ref={exh}></div>
          <div className="exhibit" ref={exh1}></div>
          <div className="description">
            <p>{description7}</p>
            <hr />
            <p>{description8}</p>
          </div>
        </div>
      </div>

      <div id="section5" className="section" ref={section5Ref}>
        <div className="animated__exh">
          <img data-speed-factor="0.5" src="https://images.unsplash.com/photo-1587586395770-0b799b9f9e81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGphcGFuZXNlfGVufDB8fDB8fHww" />
          <img data-speed="0.5" src="https://images.unsplash.com/photo-1587586395770-0b799b9f9e81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGphcGFuZXNlfGVufDB8fDB8fHww" />
          <img data-speed="0.5" src="https://images.unsplash.com/photo-1587586395770-0b799b9f9e81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGphcGFuZXNlfGVufDB8fDB8fHww" />
        </div>

        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
          width="164.000000pt" height="65.000000pt" viewBox="0 0 164.000000 65.000000"
          preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,65.000000) scale(0.100000,-0.100000)"
            fill="#000000" stroke="none">
            <path d="M206 612 c-23 -44 -54 -179 -62 -264 -4 -43 -10 -78 -14 -78 -3 0
            -16 67 -28 149 -26 173 -37 211 -62 211 -26 0 -29 -30 -36 -320 -6 -262 0
            -330 29 -301 8 8 14 73 17 204 l5 192 18 -92 c21 -114 32 -143 52 -143 23 0
            33 33 50 167 14 116 34 228 39 221 1 -2 -2 -113 -7 -248 -9 -257 -4 -305 30
            -298 9 2 21 16 26 33 14 47 14 534 0 568 -16 35 -39 35 -57 -1z"/>
            <path d="M357 634 c-11 -11 3 -24 25 -24 19 0 20 -4 14 -62 -3 -35 -9 -165
            -12 -291 -6 -216 -8 -227 -26 -227 -11 0 -18 -5 -16 -12 3 -8 29 -14 71 -16
            55 -2 67 0 67 13 0 8 -9 15 -21 15 -19 0 -20 4 -13 48 5 26 8 154 9 284 l0
            237 25 6 c24 6 24 7 6 21 -20 14 -117 20 -129 8z"/>
            <path d="M575 630 c-12 -20 15 -30 83 -30 34 0 62 -2 62 -4 0 -3 -23 -50 -51
            -107 -28 -56 -55 -112 -59 -125 -7 -17 -17 -24 -35 -24 -28 0 -33 -14 -10 -28
            14 -7 11 -22 -20 -114 -33 -101 -44 -171 -27 -182 17 -10 198 -17 212 -7 25
            17 1 26 -90 31 l-88 5 52 125 c47 114 54 125 79 128 31 4 35 17 10 31 -16 9
            -15 15 16 83 18 40 43 99 54 130 19 51 20 59 7 72 -21 21 -184 34 -195 16z"/>
            <path d="M1347 608 c-25 -53 -48 -156 -61 -268 l-12 -105 -28 174 c-31 198
            -39 224 -63 219 -25 -5 -30 -46 -38 -320 -5 -177 -4 -246 5 -274 24 -71 37
            -19 45 174 l8 177 12 -71 c23 -130 43 -167 73 -131 6 7 18 71 27 142 9 72 23
            155 30 185 l14 55 -4 -60 c-8 -94 -8 -473 0 -484 11 -18 34 -12 47 12 18 32
            18 553 0 585 -18 31 -37 28 -55 -10z"/>
            <path d="M1500 625 c0 -9 9 -15 21 -15 21 0 21 -3 15 -97 -3 -54 -7 -185 -8
            -290 l-2 -193 -23 0 c-30 0 -30 -18 0 -25 35 -9 122 -1 120 10 -1 6 -11 11
            -22 13 -17 3 -19 8 -13 35 4 18 7 146 7 285 0 230 1 252 17 252 23 0 34 20 17
            31 -8 5 -40 9 -71 9 -45 0 -58 -3 -58 -15z"/>
            <path d="M844 604 c-4 -16 -8 -139 -8 -274 -1 -230 0 -247 20 -280 27 -47 63
            -59 110 -37 78 38 111 189 96 450 -8 145 -18 185 -43 160 -11 -11 -28 -250
            -29 -408 0 -117 -18 -168 -60 -173 -50 -6 -55 18 -60 310 -3 146 -8 270 -12
            273 -4 4 -10 -6 -14 -21z"/>
            </g>
        </svg>

      </div>

      <div id="section6" className="section" ref={section6Ref}>
        <div onClick={() => topFunction()} className="scroll-to-top">
          <i className="fa fa-solid fa-angle-up fa-3x"></i>
        </div>
        <a href="#top" className="back-top-btn" aria-label="back to top" data-back-top-btn>0%</a>
              <h1>mizumi</h1>
      </div>
    </section>
  );
};

export default Home;
