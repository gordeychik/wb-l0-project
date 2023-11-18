const radioButtons = document.querySelectorAll('.modalAdress__radio');
const adress = document.querySelector('.infoChanged__address');

radioButtons.forEach((item) => {
    item.addEventListener('click', () => {
        const radio = item.querySelector('input');
        const info = item.querySelector('.modalAdress__radioInfo').cloneNode(true);
        if (radio.checked) {
            adress.innerHTML = '';
            adress.appendChild(info);
        }
    })
})