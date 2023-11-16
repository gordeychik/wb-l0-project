const chooseAll = document.getElementById("chooseAll");
const products = document.querySelector(".cart__cartItems");
const checkboxes = products.getElementsByClassName("checkbox");
const totalPrice = document.getElementById('totalPrice').getElementsByTagName('p')[0];
const cartItems = products.querySelectorAll('.cartItem');

chooseAll.addEventListener("click", () => {
  if (chooseAll.checked === true) {
    for (let item of checkboxes) {
      item.checked = true;
    }
  } else {
    for (let item of checkboxes) {
      item.checked = false;
    }
  }
  let total = 0;
  cartItems.forEach((item) => {
    if (item.querySelector('.checkbox').checked) {
      const prevPrice = parseInt(totalPrice.innerHTML.split(' ').join(''));
      const a = item.querySelector('.orderItem__priceWrapperCash').innerHTML;
      console.log(a.replace(/ /g,''));
      total = prevPrice + parseInt(item.querySelector('.orderItem__priceWrapperCash').innerHTML.split(' ').join(''));
      
    }
  })
  totalPrice.innerHTML = total;
});

products.addEventListener("click", (event) => {
  if (event.target.type === "checkbox") {
    let checkedCount = 0;
    for (let item of checkboxes) {
      if (item.checked === true) {
        checkedCount++;
      }
    }
    if (checkedCount === checkboxes.length) {
      chooseAll.checked = true;
    } else {
      chooseAll.checked = false;
    }
  }
});
