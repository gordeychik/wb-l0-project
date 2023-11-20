const point = document.querySelector(".btn__point");
const courier = document.querySelector(".btn__courier");
const pointActive = document.querySelector(".activeInPoint");
const courierActive = document.querySelector(".activeInCourier");
const deleteButtons = document.querySelectorAll(".deleteItem");
const modal = document.querySelector(".modal__main");
const titleButton = document.querySelector(".cartDelivery__titleButton");
const closeBtnAdress = document.getElementById("closeBtnAdress");
const radioButtons = document.querySelectorAll(".modalAdress__radio");
const adress = document.querySelector(".infoChanged__address");
let deliveryLocation = null;
const chooseLocation = document.querySelector('.modalAdress__btn')
const pointIcon = document.getElementById('pointIcon')
const adressPrice = document.querySelector('.delivery__address');

titleButton.addEventListener("click", () => {
  modal.style.display = "flex";
});

pointIcon.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeBtnAdress.addEventListener("click", () => {
  modal.style.display = "none";
});

courier.addEventListener("click", () => {
  courierActive.style.display = "block";
  pointActive.style.display = "none";
  courier.style.border = "2px solid #CB11AB";
  point.style.border = "2px solid #CB11AB26";
});

point.addEventListener("click", () => {
  pointActive.style.display = "block";
  courierActive.style.display = "none";
  courier.style.border = "2px solid #CB11AB26";
  point.style.border = "2px solid #CB11AB";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

deleteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const parentLabel = button.closest(".modalAdress__radio");
    if (parentLabel) {
      parentLabel.remove();
    }
  });
});

radioButtons.forEach((item) => {
  item.addEventListener("click", () => {
    const radio = item.querySelector("input");
    const info = item.querySelector(".modalAdress__radioInfo").cloneNode(true);
    if (radio.checked) {
      deliveryLocation = info;
    }
  });
});

chooseLocation.addEventListener('click', () => {
  adressPrice.innerHTML = '';
  adressPrice.innerHTML = deliveryLocation.innerHTML;
  adress.innerHTML = "";
  adress.appendChild(deliveryLocation);
  modal.style.display = "none";
});
