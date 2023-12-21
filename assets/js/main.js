const StrokeBtn = document.querySelector(".contact-stroke");
const CircleBtn = document.querySelector(".contact-circle");
const menuOpenBtn = document.querySelector(".header .menu-text");
const menuCloseBtn = document.querySelector(".header .close");
const body = document.querySelector("body");
const footer = document.querySelector(".footer");

//line motion
gsap.utils.toArray(".vertical-line").forEach((target) => {
  gsap.from(target, {
    scrollTrigger: target,
    scaleY: 0,
    ease: "power1.in",
    duration: 1,
  });
});

gsap.utils.toArray(".horizontal-line").forEach((hl) => {
  gsap.from(hl, {
    scrollTrigger: hl,
    scaleX: 0,
    ease: "power1.in",
    duration: 1,
  });
});

//img motion
const projects = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-projects",
    start: "top top",
    end: "+=1000",
    scrub: 1,
  },
});

projects.fromTo(
  ".sc-projects .image-content",
  { yPercent: -5, duration: 1 },
  { yPercent: 5, duration: 1 }
);

//btn motion
const mouseEvent = (event, element, slow) => {
  const rect = element.getBoundingClientRect();

  const elementTop = rect.top + element.clientHeight / 2;
  const elementLeft = rect.left + element.clientHeight / 2;

  const x = event.clientX - elementLeft;
  const y = event.clientY - elementTop;

  gsap.to(element, { x: x / slow, y: y / slow, duration: 0.2 });
};

gsap.utils.toArray(".view-button-wrapper").forEach((btn) => {
  document.addEventListener("mousemove", (e) => mouseEvent(e, btn, 50));
});

footer.addEventListener("mousemove", (e) => mouseEvent(e, StrokeBtn, 50));
footer.addEventListener("mousemove", (e) => mouseEvent(e, CircleBtn, 30));

//board motion
const boardScale = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-services",
    start: "bottom center",
    end: "+=5000",
    scrub: 1,
  },
});

boardScale.to(".sc-board", { scale: 3.5, backgroundColor: "#000" });

const boardColor = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-services",
    start: "bottom center",
    end: "+=1000",
    scrub: 1,
  },
});

boardColor.to(".sc-board", { backgroundColor: "#000" });

//review motion
const review = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-reviews .review-wrapper",
    start: "top top",
    end: "bottom 60%",
    scrub: 1,
  },
});

review
  .to(".image-wrapper.n1 .clear", { autoAlpha: 0 }, "review2")
  .to(".image-wrapper.n2 .clear", { autoAlpha: 1 }, "review2")
  .to(".image-wrapper.n2 .red", { zIndex: 3 }, "review2")
  .to(".image-wrapper.n2 .clear", { autoAlpha: 0 }, "review3")
  .to(".image-wrapper.n3 .clear", { autoAlpha: 1 }, "review3");

//menu motion
gsap.set(".menu", { y: "-100vh" });

const menuTl = gsap.timeline({ paused: true });

menuTl
  .to(".menu", {
    y: 0,
    ease: "power1.in",
  })
  .from(".menu-wrapper-inner", {
    opacity: 0,
    stagger: 0.1,
    x: -50,
  })
  .from(
    ".menu-bottom",
    {
      opacity: 0,
      x: -50,
    },
    "<0.2"
  );

menuOpenBtn.addEventListener("click", () => {
  menuTl.play();
  body.classList.add("oh");
});

menuCloseBtn.addEventListener("click", () => {
  menuTl.reverse();
  body.classList.remove("oh");
});

//preloader
const preloaderTl = gsap.timeline();

preloaderTl
  .to(".preloader .logo", {
    opacity: 1,
    ease: "power1.in",
    duration: 1,
  })
  .to(".preloader", {
    y: "-100vh",
    ease: "power1.in",
    duration: 1,
  });
