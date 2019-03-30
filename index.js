import { TweenMax, TimeLineMax, TimelineMax } from "gsap";

TweenMax.set(document.body, { perspective: 600 });

// Array.from({ length: 30 })
//   .map(() => document.createElement("div"))
//   .forEach(box => {
//     box.setAttribute("class", "box");
//     document.body.appendChild(box);
//     box.addEventListener("click", () => {
//       if (!TweenMax.isTweening(box)) {
//         TweenMax.to(box, 1, { rotationY: "+=180" });
//       }
//     });
//   });

// box.addEventListener("mouseout", () => {
//   TweenMax.to(box, 0.25, { className: "-=hover" });
// });

// box.addEventListener("mousedown", () => {
//   TweenMax.to(box, 0.25, { className: "+=down" });
// });

// box.addEventListener("mouseup", () => {
//   TweenMax.to(box, 0.25, { className: "-=down" });
// });

const divs = Array.from({ length: 100 }, () => document.createElement("div"));

divs.forEach(div => {
  TweenMax.set(div, {
    position: "absolute",
    x: `${Math.random() * window.innerWidth}px`,
    y: `${Math.random() * window.innerHeight}px`,
    width: 20,
    height: 20,
    backgroundColor: "green",
    border: "3px solid black"
  });
  document.body.appendChild(div);
});
TweenMax.to(divs, 10, { x: 100, y: 100 });

document.addEventListener("click", event => {
  const { x, y } = event;
  TweenMax.killTweensOf();
});

TweenMax.set("#box", { xPercent: -50, yPercent: -50 });

document.addEventListener("click", event => {
  const { clientX, clientY } = event;
  TweenMax.to("#box", 1, { x: clientX, y: clientY });
});

// TweenMax.set("#box", {
//   backgroundColor: "green",
//   height: "50px",
//   width: "50px",
//   x: "50",
//   y: "50"
// });

// document.addEventListener("click", event => {
//   const { x, y } = event;
//   TweenMax.fromTo("#box", 1, { x, y }, { x: 500, y: 500 });
// });

// const timeline = new TimelineMax({ repeat: -1 });

// timeline.pause();

// timeline.to("#box", 0.5, { x: 100 });
// timeline.to("#box", 0.5, { y: 100 });
// timeline.to("#box", 0.5, { x: 50 });
// timeline.to("#box", 0.5, { y: 50 });

// document.querySelector("#box").addEventListener("click", () => {
//   if (timeline.isActive()) {
//     timeline.pause();
//   } else {
//     timeline.resume();
//   }
// });

// document.addEventListener("wheel", event => {
//   if (event.wheelDelta > 0) {
//     // timeline.progress(timeline.progress() += 0.1)
//     TweenMax(timeline, 0.25, { progress: "+=0.1" });
//   } else {
//     TweenMax(timeline, 0.25, { progress: "-=0.1" });
//   }
// });

// document.addEventListener("click", event => {
//   TweenMax.to("#box", 0.5, {
//     rotation: "+=30"
//   });
// });
