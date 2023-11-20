const button = document.querySelector(".choose__wrapperIcon");
const content = document.querySelector(".cart__cartItems");
const contentParent = document.querySelector(".cart__info");
const buttonAbsence = document.querySelector(".chooseAbsence__wrapperIcon");
const contentAbsence = document.querySelector(".cart__cartItemsAbsence");

function accord() {
  if (content.closest(".cart__cartItems--close")) {
    content.style.maxHeight = content.scrollHeight + "px";
    contentParent.classList.remove("cart__cartItems--close");
    document.querySelector('.checkbox__wrapper').style.display='block';
    document.querySelector('.accordion--close').style.display='none';
  } else {
    content.style.maxHeight = 0;
    document.querySelector('.checkbox__wrapper').style.display='none';
    document.querySelector('.accordion--close').style.display='block';
    contentParent.classList.add("cart__cartItems--close");
  }
}

function accordAbsence() {
  if (contentAbsence.closest(".cart__cartItemsAbsence--close")) {
    contentAbsence.style.maxHeight = contentAbsence.scrollHeight + "px";
    contentParent.classList.remove("cart__cartItemsAbsence--close");
  } else {
    contentAbsence.style.maxHeight = 0;
    contentParent.classList.add("cart__cartItemsAbsence--close");
  }
}

button.addEventListener("click", accord);

buttonAbsence.addEventListener("click", accordAbsence);

