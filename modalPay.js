document.addEventListener('DOMContentLoaded', function() {
    const cartTitle = document.querySelector('.cartPayment__title');
    const modal = document.getElementById('myModal');
    const closeBtn = document.getElementById('closeBtn');
    const modalText = document.getElementById('modalText');
    const chooseBtn = document.getElementsByClassName('modal__btn');

    cartTitle.addEventListener('click', function(event) {
        if (event.target.classList.contains('cartPayment__titleButton')) {
            modal.style.display = 'block';
        }
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // chooseBtn.addEventListener('click', )
});
