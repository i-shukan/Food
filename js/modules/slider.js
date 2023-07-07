function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {
    const slider = document.querySelector(container),
          next = slider.querySelector(nextArrow),
          prev = slider.querySelector(prevArrow),
          current = slider.querySelector(currentCounter),
          total = slider.querySelector(totalCounter),
          slidesWrapper = slider.querySelector(wrapper),
          slidesField = slider.querySelector(field),
          slides = slider.querySelectorAll(slide),
          width = +window.getComputedStyle(slidesWrapper).width.replace(/\D/g, '');
    let currentInd = 1,
        offset = 0,
        dots = document.createElement('ul'),
        dotsArr = [];

    function getZero(num){
        if (num >= 0 && num < 10) { 
            return '0' + num;
        } else {
            return num;
        }
    }

    dots.classList.add('carousel-indicators');

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.classList.add('dot');
        dot.setAttribute('data-slide-i', i + 1);

        if (i == 0) dot.style.opacity = '1';

        dots.append(dot);
        dotsArr.push(dot);
    }

    slidesWrapper.append(dots);

    current.textContent = getZero(currentInd);
    total.textContent = getZero(slides.length);

    slidesWrapper.style.overflow = 'hidden';
    slidesWrapper.style.position = 'relative';

    slidesField.style.cssText = `
        display: flex;
        transition: 0.5s all;
        width: ${100 * slides.length}%;
    `;

    function resetSlider() {
        dotsArr.forEach(dot => dot.style.opacity = '0.5');
        dotsArr[currentInd - 1].style.opacity = '1';
        slidesField.style.transform = `translateX(${-offset}px)`;
        current.textContent = getZero(currentInd);
    }

    dotsArr.forEach(dot => {
        dot.addEventListener('click', (e) => {
            currentInd = e.target.getAttribute('data-slide-i');
            offset = width * (currentInd - 1);

            resetSlider();
        })
    })

    next.addEventListener('click', () => {
        if (offset == width * (slides.length - 1)) {
            currentInd = 1;
            offset = 0;
        } else {
            currentInd++;
            offset += width;
        }

        resetSlider();
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            currentInd = slides.length;
            offset = width * (slides.length - 1);
        } else {
            currentInd--;
            offset -= width;
        }
        
        resetSlider();
    });
}

export default slider;