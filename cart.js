let cartitemList = JSON.parse(localStorage.getItem("cartlist")) || [];
let cartProduct = document.getElementById("cartProduct");
let totalPrice = document.getElementById("totalPrice");

function displayCart() {
  let total = 0;
  let output = "";
  cartitemList.forEach((element, index) => {
    total += element.price;
    output += `
    <div class="product-item">
        <div class="product-image">
            <img src="${element.thumbnail}" alt="${element.title}">
        </div>
        <div class="product-details">
            <h4 class="product-title">${element.title}</h4>
            <h4 class="price">${element.price}</h4>
            <button onclick="deleteProduct(${index})" class="delete-button">Remove</button>
        </div>
    </div>
`;
  });

  cartProduct.innerHTML = output;
  totalPrice.innerHTML = `
  <h4>Total Price: ${total.toFixed(2)}</h4>
  <button id="buyBtn"> Processed to Buy</button>
  `;
}

function deleteProduct(deleteMe) {
  console.log(cartitemList);
  cartitemList.splice(deleteMe, 1);
  localStorage.setItem("cartlist", JSON.stringify(cartitemList));
  console.log(cartitemList);
  displayCart();
  if (cartitemList.length === 0) {
    emptyCart();
  }
}

function emptyCart() {
  document.body.style.display = "flex";
  document.body.style.justifyContent = "center";
  document.body.style.alignItems = "center";
  document.body.style.height = "100vh";
  document.body.style.margin = "0";
  document.body.style.backgroundColor = "lightblue";

  let notempty = `
  <div><h1 style="color: #4a90e2;">Your Shopping Cart is Empty</h1>
    <p style="color: #333;">Looks like you haven't added anything to your cart yet.</p>
    <a href="index.html" style="text-decoration: none; background-color: #e94e77; color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold; transition: background-color 0.3s;">Continue Shopping</a></div> `;

  document.getElementsByTagName("body")[0].innerHTML = notempty;
  totalPrice.remove();
  console.log("Start SHopping");
}

document.addEventListener("DOMContentLoaded", () => {
  if (cartitemList.length === 0) {
    emptyCart();
  } else {
    displayCart();
  }
});
