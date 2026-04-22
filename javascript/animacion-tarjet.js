gsap.registerPlugin(ScrollTrigger);

const cards = gsap.utils.toArray(".card");

cards.forEach((card, i) => {
  gsap.fromTo(card, 
    {
      y: 100, 
      opacity: 0.7,
      scale: 0.95
    },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      ease: "power2.out", // 🔥 suavidad real
      scrollTrigger: {
        trigger: card,
        start: "top 100%",
        end: "top 150px",
        scrub: 3
      }
    }
  );
});