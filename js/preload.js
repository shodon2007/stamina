let width = 0;
const bar = document.getElementById("barconfrm");
let id;

move()

function move() {
    id = setInterval(frame, 10);
}

function frame() {
    if (document.readyState == 'complete') {
        width++;
    }

    if (width >= 100) {
        setTimeout(() => {
            loaded();
            document.querySelector('head').innerHTML += `<style>html {overflow: visible !important;}</style>`
        }, 1000);
        clearInterval(id);
        tll.play();
    }
    else {
        window.scrollTo(0, 0);
        bar.style.width = width + "%";
        document.getElementById("percent").innerHTML = width + "%";
    }
}

// Animation
const tll = gsap.timeline({
    paused: "true"
});
tll.to("#percent, #bar", {
    duration: .2,
    opacity: 0,
    zIndex: -1
});
tll.to("#preloader", {
    duration: 1,
    width: "0%"
});


document.addEventListener('DOMContentLoaded', () => {
    const bgImg1 = new Image();
    const bgImg2 = new Image();
    const bgImg3 = new Image();
    bgImg1.src = './img/bg_image.png';
    bgImg2.src = './img/bg_1.jpg';
    bgImg3.src = './img/bg_3.jpg';
    document.querySelector('.first-screen__video').style.background = `url(${bgImg1.src}) center/cover no-repeat`;
    document.querySelector('.quote1').style.background = `url(${bgImg2.src}) center/cover no-repeat`;
    document.querySelector('.quote2').style.background = `url(${bgImg3.src}) center/cover no-repeat`;
    let mediaFiles = document.querySelectorAll('img', 'video');

    mediaFiles = Array.from(mediaFiles)
    mediaFiles.push(bgImg1, bgImg2, bgImg3);

    let i = 0;



    mediaFiles.forEach((file) => {
        file.onload = () => {
            i++;

            width = ((i * 100) / mediaFiles.length).toFixed()
        }
    })
});