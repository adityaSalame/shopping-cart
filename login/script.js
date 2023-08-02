document.getElementById("login-button").addEventListener("click",checkuser);
let email=document.getElementById("email");
let password=document.getElementById("password");
function checkuser(e){
    e.preventDefault();
    if(email.value.trim()==""||password.value.trim()=="") {
        alert("fill all details");
    
    }
    else{
        let users = JSON.parse(localStorage.getItem('users'));
        
        if (users) {
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
    // if(users === null){
    //     alert("user does not exist");
    // }
    // else{
    //      // users will be array of objects
    //      const obj = users.find(userObj=>{
    //         return userObj.email === email;
    //         // if obj with email is exist 
    //     })
    //     if(obj) checkpassword(obj.password);
    //     else alert("user does not exist");
    // }
        
       
    

}

function checkpassword()