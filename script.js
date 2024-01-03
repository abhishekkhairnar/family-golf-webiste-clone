var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove",(dets)=>{
    crsr.style.left = dets.x-20+"px";
    crsr.style.top = dets.y-20+"px";
    blur.style.left = dets.x-150+"px";
    blur.style.top = dets.y-150+"px";
})
gsap.from("nav",{
    backgroundColor:"#000",
    duration:1,
    height:"130px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})
