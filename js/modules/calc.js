function calc() {
    const calc = document.querySelector('.calculating__field'),
          result = calc.querySelector('.calculating__result span');

    let gender, height, weight, age, activity;

    if (localStorage.getItem('gender')) {
        gender = localStorage.getItem('gender');
    } else {
        gender = 'female';
        localStorage.setItem('gender', 'female');
    }

    if (localStorage.getItem('activity')) {
        activity = localStorage.getItem('activity');
    } else {
        activity = 1.375;
        localStorage.setItem('activity', 1.375);
    }

    function initLocalSettings(selector, activeClass) {
        const element = calc.querySelectorAll(selector);

        element.forEach(elem => {
            elem.classList.remove(activeClass);
            if (elem.getAttribute('id') === localStorage.getItem('gender')) {
                elem.classList.add(activeClass);
            }
            if (elem.getAttribute('data-activity') === localStorage.getItem('activity')) {
                elem.classList.add(activeClass);
            }
        })
    }

    function calcData() {
        if (!gender || !height || !weight || !age || !activity) {
            result.textContent = '____';
            return;
        } else {
            switch(gender) {
                case 'female': {
                    result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * activity);
                    break;
                }
                case 'male': {
                    result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * activity);
                    break;
                }
            };
        }
    }

    function getInputData() {
        calc.querySelectorAll('input').forEach((input) => {
            input.addEventListener('input', () => {

                if (input.value.match(/\D/g)) {
                    input.style.border = '1px solid red';
                } else {
                    input.style.border = 'none';
                }

                switch(input.id) {
                    case 'height': {
                        height = +input.value;
                        break;
                    }
                    case 'weight': {
                        weight = +input.value;
                        break;
                    }
                    case 'age': {
                        age = +input.value;
                        break;
                    }
                }

                calcData();
            })
        })
    }

    function getRadioData(selector, activeClass) {
        const items = document.querySelectorAll(selector);

        items.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target.getAttribute('data-activity')) {
                    activity = +e.target.getAttribute('data-activity');
                    localStorage.setItem('activity', +e.target.getAttribute('data-activity'));
                } else {
                    gender = e.target.getAttribute('id');
                    localStorage.setItem('gender', e.target.getAttribute('id'));
                }

                items.forEach(item => {
                    item.classList.remove(activeClass);
                })

                e.target.classList.add(activeClass);
                
                calcData();
            })
        });
    }

    initLocalSettings('#gender div', 'calculating__choose-item_active');
    initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');
    calcData();
    getInputData();
    getRadioData('#gender div', 'calculating__choose-item_active');
    getRadioData('.calculating__choose_big div', 'calculating__choose-item_active');
}

export default calc;