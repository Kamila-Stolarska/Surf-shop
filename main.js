const slideList = [{
    img: "./img/slider1.jpg",
},
{
    img: "./img/slider2.jpg",
},
{
    img: "./img/slider3.jpg",
}];

const image = document.querySelector('.slider img');

const time = 5000;
let active = 0;

const changeSlide = () => {
    active++;
    if(active === slideList.length) {
        active = 0;
    }
    //console.log("zmaiana")
    image.src = slideList[active].img;
    image.className = `img-slider-${active+1}`;
}

setInterval(changeSlide, time)