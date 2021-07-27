gsap
    .timeline({
        defaults: {
            duration: 0.7
        }
    })
    .from(".bl" , {
        y: -20,
        opacity: 0
    })

/*
const tab = document.querySelector('.tabs__label');
const toggleTab =  new TimelineMax({paused: true, reversed: true});

gsap
    .to(".tabs__content" , {
        opacity: 0,
        ease: "sin.out"
    });

tab.addEventListener('click', _ =>  {
    toggleTab.reversed() ? toggleTab.play() : toggleTab.reverse();
});
*/
