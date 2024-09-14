document.addEventListener("DOMContentLoaded", () => {
  let single_product = JSON.parse(localStorage.getItem("searchID"));
  let allproducts = JSON.parse(localStorage.getItem("products"));

  let inserthere = document.getElementById("inserthere");
  let imghere = document.getElementById("imghere");
  let reviewshere = document.getElementById("thisreview");

  if (single_product && allproducts) {
    let search = allproducts.find((val) => {
      return val.id == single_product;
    });

    if (search) {
      let result = "";
      let imgoutput = "";
      let thisreview = "";
      let star = "";
      let fullStar = Math.round(search.rating);
      let emptyStar = 5 - fullStar;

      for (let i = 0; i < fullStar; i++) {
        star += "★";
      }

      for (let i = 0; i < emptyStar; i++) {
        star += "☆";
      }

      result += `
                <div class="detailedcard">
                    <div id="details">
                        <h3>${search.title}</h3>
                        <h4>Brand - ${search.brand}</h4>
                        <h5>Price - ${search.price.toFixed(2)}</h5>
                        <h5>Rating - ${star}</h5>
                        <p>Description: ${search.description}</p>
                        <p>Warranty: ${search.warrantyInformation}</p>
                        <p>Shipping: ${search.shippingInformation}</p>
                        <p>Availability: ${search.availabilityStatus}</p>
                    </div>
                </div>

                <button id="cart-button">Add Cart</button>
                <button class="home-button"><a href="index.html">Go home </a></button>

                 
            `;

      imgoutput += `
                <div class="card">
                    <img src="${search.thumbnail}" alt="${search.title}">
                </div>
            `;

      inserthere.innerHTML = result;

      imghere.innerHTML = imgoutput;
      document.getElementById("cart-button").addEventListener("click", () => {
        addToCart(search);
      });
    }
  }
});

let cartitemList = JSON.parse(localStorage.getItem("cartlist")) || [];

function addToCart(cartitem) {
  cartitemList.push(cartitem);
  localStorage.setItem("cartlist", JSON.stringify(cartitemList));
  alert("Product added to cart");
  console.log(cartitemList);
}
