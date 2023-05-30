'use strict'

// Tabs

const tabsParent = document.querySelector('.tabheader__items'),
    tabsContent = document.querySelectorAll('.tabcontent'),
    tabs = document.querySelectorAll('.tabheader__item');

function hideTabContent() {
    tabsContent.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show', 'fade');
    })

    tabs.forEach(item => {
        item.classList.remove('tabheader__item_active');
    })
}

function showTabContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
}

tabsParent.addEventListener('click', (event) => {
    const target = event.target;

    if (target && target.matches('.tabheader__item')) {
        tabs.forEach((item, i) => {
            if (target === item) {
                hideTabContent();
                showTabContent(i);
            }
        })
    }
})

hideTabContent();
showTabContent();

// Timer

const deadline = '2023-05-23T19:29:00.000Z';

function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
          days = Math.floor(t / (1000 * 60 * 60 * 24)),
          hours = Math.floor(t / (1000 * 60 * 60) % 24),
          minutes = Math.floor((t / 1000 / 60) % 60),
          seconds = Math.floor((t / 1000) % 60);
    
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds,
    }
}

function getZero(num) {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}

function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          interval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
        const t = getTimeRemaining(endtime);

        days.innerHTML = getZero(t.days);
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);

        if (t.total <= 0) clearInterval(interval);
    }
}

setClock('.timer', deadline);

// Modal

const triggers = document.querySelectorAll('[data-modal]'),
      modal = document.querySelector('.modal'),
      modalForm = modal.querySelector('form'),
      modalClose = modal.querySelector('[data-close]'),
      inputs = modalForm.querySelectorAll('.modal__input');

function showModal() {
    modal.classList.remove('hide');
    modal.classList.add('show', 'fade');
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimerId);
}

triggers.forEach((item) => {
    item.addEventListener('click', showModal);
});

function checkInputs(arr) {
    arr.forEach((item) => {
        if (item == '') return false;
    })
    return true;
}

modalForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (checkInputs(inputs)) {
        inputs.forEach((item) => {
            item.value = '';
        });
    };
});

function hideModal() {
    modal.classList.remove('show', 'fade');
    modal.classList.add('hide');
    document.body.style.overflow = '';

    inputs.forEach((item) => {
        item.value = '';
    });
}

modalClose.addEventListener('click', hideModal);

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        hideModal();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.code === "Escape" && modal.classList.contains('show')) {
        hideModal();
    }
});

const modalTimerId = setTimeout(showModal, 5000);

function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        showModal();
        window.removeEventListener('scroll', showModalByScroll);
    }
}

window.addEventListener('scroll', showModalByScroll);