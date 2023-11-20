const orderButton = document.querySelector('.button__order');
const emailRegexp = /^\S+@\S+\.\S+$/;
const phoneRegexp = /^(\+7|8)\s?(\d{3})\s?(\d{3})\s?(\d{2})\s?(\d{2})$/;
const innRegexp = /^\d{14}$/;;

orderButton.addEventListener('click', () => {
    const name = document.getElementById('nameInput').value;
    const lastname = document.getElementById('lastnameInput').value;
    const email = document.getElementById('emailInput').value;
    const phone = document.getElementById('phoneInput').value;
    const inn = document.getElementById('innInput').value;

    if (!name) {
        const formInput = document.getElementById('formInputName');
        const error = document.getElementById('nameError');
        error.innerHTML = 'Укажите имя';
        formInput.classList.add('formInput--error');        
    }

    if (!lastname) {
        const formInput = document.getElementById('formInputLastname');
        const error = document.getElementById('lastnameError');
        error.innerHTML = 'Укажите фамилию';
        formInput.classList.add('formInput--error');        
    }


    if (!email || !emailRegexp.test(email)) {
        const formInput = document.getElementById('formInputEmail');
        const error = document.getElementById('emailError');
        error.innerHTML = !!email.length ? 'Неверный формат почты' : 'Укажите почту';
        formInput.classList.add('formInput--error');        
    }

        if (!phone || !phoneRegexp.test(phone)) {
        const formInput = document.getElementById('formInputPhone');
        const error = document.getElementById('phoneError');
        error.innerHTML = !!phone.length ? 'Формат: +9 999 999 99 99' : 'Укажите номер телефона';
        formInput.classList.add('formInput--error');        
    }

    if (!inn || !innRegexp.test(inn)) {
        const formInput = document.getElementById('formInputInn');
        const error = document.getElementById('innError');
        error.innerHTML = !!inn.length ? 'Проверьте ИНН' : 'Укажите ИНН';
        formInput.classList.add('formInput--error');        
    }


});