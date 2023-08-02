document.getElementById("login-page").addEventListener("click",openLogin);
document.getElementById("signup-page").addEventListener("click",openSignup);

function openLogin(e){
    e.preventDefault();
    window.location.href="./login";
}

function openSignup(e){
    e.preventDefault();
    window.location.href="./signup";
}