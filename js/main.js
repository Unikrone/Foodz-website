const left_arrow = document.querySelector('.left-arrow');
const right_arrow = document.querySelector('.right-arrow');
const sliderElements = document.querySelectorAll('.slider-item');
const timerElements = document.querySelectorAll('.time')
const inputSym = document.querySelector('.sym-input');
let position = 0;
let counter = 1;

let pricelist = [22.99, 21.99, 6.99]

const slider = document.querySelector('.sp-offer-slider');
const blockWidth = document.querySelector('.sp-slider-wrap').clientWidth;
const sliderItemWidth = document.querySelector('.slider-item').clientWidth;
const sliderActiveItemWidth = document.querySelector('.active').clientWidth;
const sliderGap = (blockWidth - 2 * sliderItemWidth - sliderActiveItemWidth) / 2;
const addTaste = document.querySelector('.sym-btn');
// console.log(sliderGap);

right_arrow.addEventListener('click', () => {
    if (counter < 2) {
        const currentItem = document.querySelector('.active');
        counter += 1;
        right_arrow.disabled = counter === 2;
        currentItem.classList.remove('active');
        sliderElements[counter].classList.add('active');
        position -= sliderItemWidth + sliderGap;
        setPosition();
    }


})

left_arrow.addEventListener('click', () => {
    if (counter > 0) {
        const currentItem = document.querySelector('.active');
        counter -= 1;
        left_arrow.disabled = counter === 0;
        currentItem.classList.remove('active');
        sliderElements[counter].classList.add('active');
        position += sliderItemWidth + sliderGap;
        setPosition();
    }
})

addTaste.addEventListener('click', () => {
    const elem = document.querySelector('.sym-input-wrap').cloneNode(true);
    document.querySelector('.sym-input-container').appendChild(elem);
    eventAdder();
})

const eventAdder = () => {
    let itemList = document.querySelectorAll('.sym-input');
    itemList[itemList.length - 1].addEventListener('change', () => {
        let startPrice = 0;
        itemList = document.querySelectorAll('.sym-input');
        itemList.forEach((elem) => {
            startPrice += pricelist[elem.selectedIndex - 1];
        });

        document.querySelector('.total-price-count').textContent = `$${startPrice}`;
    })
}


document.addEventListener('DOMContentLoaded', () => {
    let hours = 3;
    let minutes = 0;
    let seconds = 0;
    let time;
    function countdownTimer() {
        if (minutes === 0 && seconds === 0) {
            hours -= 1;
            minutes = 59;
            seconds = 59;
        }
        else if (seconds === 0 && minutes != 0) {
            minutes -= 1;
            seconds = 59;
        }
        else if (seconds != 0) {
            seconds -= 1;
        }
        if (minutes <= 9) {
            if (seconds <= 9) {
                time = `0${hours}:0${minutes}:0${seconds}`;
            }
            else {
                time = `0${hours}:0${minutes}:${seconds}`;
            }
        }
        else {
            if (seconds <= 9) {
                time = `0${hours}:${minutes}:0${seconds}`;
            }
            else {
                time = `0${hours}:${minutes}:${seconds}`;
            }
        }
        timerElements.forEach(element => {
            element.textContent = time;
        });
    }
    countdownTimer();
    timerId = setInterval(countdownTimer, 1000);
});

const setPosition = () => {
    slider.style.transform = `translateX(${position}px)`;
};

eventAdder();