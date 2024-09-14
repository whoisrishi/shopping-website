document.addEventListener("DOMContentLoaded", () => {
  hidelogin();
  document.getElementById("signupform").addEventListener("submit", (event) => {
    event.preventDefault();

    let username = document.getElementById("setusername").value;
    let password = document.getElementById("setpassword").value;

    localStorage.setItem("setusername", JSON.stringify(username));
    localStorage.setItem("setpassword", JSON.stringify(password));
    alert("done");
    document.getElementById("signupform").reset();
  });

  document.getElementById("loginform").addEventListener("submit", (event) => {
    event.preventDefault();
    var localUsername = JSON.parse(localStorage.getItem("setusername"));
    var localPassword = JSON.parse(localStorage.getItem("setpassword"));

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === localUsername && password === localPassword) {
      alert("Loging in...");
      window.location.href = "./index.html";
    } else {
      alert("Please enter valid credentials");
    }
  });
});

function hidelogin() {
  console.log("hidesignup called");
  document.getElementById("right").style.display = "none";
  document.getElementById("left").style.display = "block";
  document.getElementById("left").style.width = "100%";
  document.getElementById("right").style.marginLeft = "30%";
  document.getElementById("right").style.marginTop = "10%";
}

function hidesignup() {
  console.log("hidelogin called");
  document.getElementById("left").style.display = "none";
  document.getElementById("right").style.display = "block";
  document.getElementById("right").style.width = "100%";
  document.getElementById("left").style.paddingTop = "10%";
}
