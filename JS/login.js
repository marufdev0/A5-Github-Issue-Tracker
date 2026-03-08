document.getElementById('btn-loggin').addEventListener("click", function(){
    
    const userValue = document.getElementById('user-value');
    const user = userValue.value;
    
    const userPass = document.getElementById('user-pass')
    const pass = userPass.value;

    if (user === "admin" && pass === "admin123"){
        window.location.assign("/home.html")
    }else{
        alert("login failed");
        return;
    }
   
})