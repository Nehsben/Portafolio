// GSAP Animations for Nahuel Benitez Portfolio with Advanced Effects
document.addEventListener('DOMContentLoaded', () => {
    // Welcome Text Animation
    gsap.from("#text", { 
      duration: 2.5, 
      y: 100, 
      opacity: 0, 
      ease: "expo.out", 
      delay: 0.5 
    });
  
    gsap.to(".console-underscore", { 
      opacity: 0, 
      duration: 0.7, 
      repeat: -1, 
      yoyo: true 
    });
  
    // Project Panels Animation with 3D Effect
    document.querySelectorAll(".panel").forEach(panel => {
      panel.addEventListener("mousemove", (e) => {
        const rect = panel.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        gsap.to(panel, {
          rotationY: ((x / rect.width) - 0.5) * 15,
          rotationX: ((y / rect.height) - 0.5) * -15,
          duration: 0.3,
          ease: "power2.out"
        });
      });
  
      panel.addEventListener("mouseleave", () => {
        gsap.to(panel, { rotationY: 0, rotationX: 0, duration: 0.5, ease: "power2.out" });
      });
    });
  
    // Profile Card Animation
    gsap.from(".card", { 
      x: -100, 
      opacity: 0, 
      duration: 1.5, 
      ease: "power2.out", 
      delay: 0.5 
    });
  
    document.querySelectorAll(".sci li").forEach((icon) => {
      icon.addEventListener("mouseenter", () => {
        gsap.to(icon, { 
          y: -10, 
          duration: 0.3, 
          ease: "power2.out" 
        });
      });
  
      icon.addEventListener("mouseleave", () => {
        gsap.to(icon, { 
          y: 0, 
          duration: 0.3, 
          ease: "power2.in" 
        });
      });
    });
  
    // Wave Animation with Parallax
    gsap.to(".wave span", {
      y: (i) => i * 10,
      scrollTrigger: {
        trigger: ".section1",
        start: "top bottom",
        scrub: true
      }
    });
  
    // Scroll-to-Top Button Animation
    const topButton = document.querySelector('.top');
    gsap.from(topButton, { 
      opacity: 0, 
      y: 100, 
      duration: 0.5, 
      ease: "power2.out" 
    });
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        gsap.to(topButton, { 
          opacity: 1, 
          y: 0, 
          pointerEvents: "auto", 
          duration: 0.5 
        });
      } else {
        gsap.to(topButton, { 
          opacity: 0, 
          y: 100, 
          pointerEvents: "none", 
          duration: 0.5 
        });
      }
    });
  
    // Animated Section Transitions
    gsap.utils.toArray("section").forEach((section, index) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse"
        }
      });
    });
  
    // Dynamic Background Animation
    gsap.to(".wave span", {
      rotation: 360,
      repeat: -1,
      duration: 20,
      ease: "linear"
    });
  
    // Navbar Animation
    const navbar = document.querySelector("nav");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        gsap.to(navbar, { 
          backgroundColor: "rgba(20, 20, 20, 0.9)", 
          duration: 0.3 
        });
      } else {
        gsap.to(navbar, { 
          backgroundColor: "transparent", 
          duration: 0.3 
        });
      }
    });
  
    // Footer Social Icons Animation
    gsap.from("footer .social-icon", {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "footer",
        start: "top 90%",
        toggleActions: "play none none reverse"
      }
    });
  
    // Preloader Animation
    gsap.to(".preloader", { 
      scale: 0, 
      duration: 1, 
      ease: "power3.inOut", 
      onComplete: () => document.querySelector(".preloader").remove()
    });
  });
  