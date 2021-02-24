// slider image
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
    image.src = slideList[active].img;
    image.className = `img-slider-${active+1}`;
}

setInterval(changeSlide, time)

// hidden-menu

let hamburger = document.querySelector(".fas.fa-bars");
const hiddenMenu = document.querySelector("header .hidden-menu");


hamburger.addEventListener('click', function() {
// hiddenMenu.style.display = "block";
 hiddenMenu.classList.toggle("active");
// if ( x == "1") {
//     hiddenMenu.style.display = "none";
// } else {
//     x--;
//     hiddenMenu.style.display = "block"
// }

});

// bars.addEventListener('click', function () {
//     navList.classList.toggle('active');
// });

// function showMenu() {
   
// } 
// hamburger.addEventListener('click', showMenu)