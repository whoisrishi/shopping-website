let content = document.getElementsByClassName("content")[0];
let products = []; // Global variable to store products

function fetchFun() {
    return fetch("https://dummyjson.com/products")
        .then((val) => val.json())
        .then((val) => {
            products = val.products; // Store products in the global variable
            localStorage.setItem("products", JSON.stringify(products));
            return products;
        });
}

document.getElementById("dosearch").addEventListener('input', dosearch);

function dosearch(event) {
    const searchTerm = event.target.value.toLowerCase(); // Get the search term
    const filteredProducts = products.filter(product => 
        product.title.toLowerCase().includes(searchTerm) // Filter products based on title
    );
    displayProducts(filteredProducts); // Display the filtered products
}

function displayProducts(products) {
    localStorage.getItem("setusername")
        console.log("You are already logged in ")

    let output = '';
    products.forEach((res) => {
        let star = "";
        let fullStar = Math.round(res.rating);
        let emptyStar = 5 - fullStar;

        for (let i = 0; i < fullStar; i++) {
            star += "★"; 
        }

        for (let i = 0; i < emptyStar; i++) {
            star += "☆"; 
        }
        
        output += `
        <div class="card">
            <img src="${res.thumbnail}">
            <h3>${res.title}</h3>
            <h4> ${res.price}<sup> $</sup></h4>
            <h5>${star}</h5>
            <div id="viewmore">
                 <button onclick="viewMore(${res.id})" style="width:100%; height:100%; border:none"> View more </button>
            </div>
        </div>
        `;
    });

    content.innerHTML = output; // Update the content with the filtered products
}

fetchFun().then((products) => {
    if (products) {
        displayProducts(products); // Display all products initially
    }
});

function viewMore(product) {
    localStorage.setItem("searchID", product);
    console.log("working");
    window.location.href = "./viewmore.html";
}



function islogged(){
    console.log(localStorage.getItem("setusername") )
    
    if(localStorage.getItem("setusername") != null ){
        alert("already Logged in")
        window.location.href='profile.html'
    }else{
        alert("Need to sign UP")
        window.location.href='login.html'

        
        }

    // if(){
    // }
}