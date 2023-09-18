let cursr=document.querySelector(".cursor");
let cursrblur=document.querySelector(".cursor-blur");
document.addEventListener("mousemove",function(dets){
    cursr.style.left=dets.x-10+"px"
    cursr.style.top=dets.y-10+"px";
    cursrblur.style.left=dets.x-120+"px"
    cursrblur.style.top=dets.y-120+"px";
})
gsap.to(".nav",{
    backgroundColor:"black",
    height:100,
    duration:1,
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        start:"top -10%",
        end:"40% top",
        scrub:1.2
    }
})
gsap.from(".page2",{
    opacity:0,
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        start:"top -30%",
        end:"top -100%",
        scrub:1.2
    }
});