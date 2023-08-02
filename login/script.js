document.getElementById("login-button").addEventListener("click",checkuser);
let email=document.getElementById("email");
let password=document.getElementById("password");
function checkuser(e){
    
    if(email.value.trim()==""||password.value.trim()=="") {
        alert("fill all details");
    
    }
    else{
        let users = JSON.parse(localStorage.getItem('users'));
        
        if (users!=null) {
            let currentUser = users.find(user => {
                return user.email === email.value.trim();
            });
            if (currentUser) {
                if(password.value.trim()===currentUser.password){
                    sessionStorage.setItem('loggedInUser',JSON.stringify(currentUser));
                    window.location.href='../profile';
                    alert('logged in');
                }
                else{
                    alert('incorrect password');
                }
            }
            else {
                alert('you have not signed up');
            }
        }
        else {
            alert('you have not signed up');
        }
    }
    
    // document.getElementById("Signup").addEventListener("click",()=>{
    //     window.location.href="../signup";
    // });
        
       
    

}

