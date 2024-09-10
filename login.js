document.addEventListener("DOMContentLoaded", () => {
    // signup

    document.getElementById("signupform").addEventListener("submit",(event)=>{
        event.preventDefault();
        let username= document.getElementById("setusername").value 
        let password= document.getElementById("setpassword").value 
        localStorage.setItem("setusername",JSON.stringify(username))
        localStorage.setItem("setpassword",JSON.stringify(password))
        alert("done")
        
    })
    

    document.getElementById("loginform").addEventListener("submit",(event)=>{
        event.preventDefault();
        
        var localUsername = JSON.parse(localStorage.getItem("setusername"))
        var localPassword = JSON.parse(localStorage.getItem("setpassword"))
        
        let username= document.getElementById("username").value   

        let password= document.getElementById("password").value
        
        if (username === localUsername && password === localPassword){
        alert("correct Cred")  
        window.location.href='./index.html'      
        }else{
            alert("INcrct Cred")        
    
        }
    
    
    })
    
})
