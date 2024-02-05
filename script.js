function init() {
    gsap.registerPlugin(ScrollTrigger);
    
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
init();

// @=========================== cursor =============================== //
let cursor = document.querySelector("#cursor");
window.addEventListener("mousemove", (details) =>{
    gsap.to(cursor, {
        x: (details.clientX + 20),
        y: (details.clientY + 20)
    })
});
// @=========================== heroSection =============================== //
let tl = gsap.timeline({
    scrollTrigger:{
        trigger: "#heroSection h1",
        scroller: "main",
        // markers: true,
        start: "top 27%",
        end: "top 0",
        scrub: 3
    }
});

tl.to("#heroSection h1", {
    x: -100,
}, "anim");
tl.to("#heroSection h2", {
    x: 100,
}, "anim");
tl.to("#heroSection video", {
    width: "90%"
}, "anim"); 

// @================================= aboutSection ================================= //
let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: "#heroSection h1",
        scroller: "main",
        // markers: true,
        start: "top -115%",
        end: "top -120%",
        scrub: .1
    }
});

tl2.to("main", {
    backgroundColor: "var(--white)",
});

// @================================= brandSection ================================= //
let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger: "#heroSection h1",
        scroller: "main",
        // markers: true,
        start: "top -480%",
        end: "top -485%",
        scrub: .1
    }
});

tl3.to("main", {
    backgroundColor: "var(--black)",
});

// @================================= clientSection ================================= //
let boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        let image = elem.getAttribute("data-image")
        cursor.style.width = "480px";
        cursor.style.height = "380px";
        cursor.style.borderRadius = "0";
        cursor.style.backgroundImage = `url(${image})`;
        cursor.style.zIndex = "99";
    });
    elem.addEventListener("mouseleave", function(){
        cursor.style.width = "20px";
        cursor.style.height = "20px";
        cursor.style.borderRadius = "50%";
        cursor.style.backgroundImage = "none";
        cursor.style.zIndex = "8";
    });
})