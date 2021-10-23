let offset = 0;
const sliderHolder = document.querySelector('.slider-holder');

document.querySelector('.slider-button-next').addEventListener('click', function (){
    offset = offset + 305;
    if (offset > 305) {
        offset = 305;
    }
    sliderHolder.style.left = -offset + 'px';
    if (offset >= 305) {
        document.getElementById("btn-next").className = "btn-disabled-next";
    }
    if (offset >= 0) {
        document.getElementById("btn-prev").className = "slider-button-prev";
    }
})

document.querySelector('.btn-disabled-prev').addEventListener('click', function (){
    offset = offset - 305;
    if (offset < 0) {
        offset = 0;
    }
    sliderHolder.style.left = -offset + 'px';
    if (offset < 305) {
        document.getElementById("btn-next").className = "slider-button-next";
    }
    if (offset <= 0) {
        document.getElementById("btn-prev").className = "btn-disabled-prev";
    }
})

