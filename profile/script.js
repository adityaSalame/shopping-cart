let fName = document.getElementById('firstName');
let lName = document.getElementById('lastName');
let old=document.getElementById("old-pw");
let newP=document.getElementById("new-pw");
let confirmP=document.getElementById("confirm-new-pw");
let users = JSON.parse(localStorage.getItem('users'));
let currentUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
console.log(users);
console.log(currentUser);
fName.value= currentUser.firstName;
lName.value= currentUser.lastName;

document.getElementById("saveinfo").addEventListener("click",changename);

function changename(){
    
    let updated= users.map(userObj=>{
        if( userObj.email === currentUser.email){
            userObj.firstName=fName.value;
            userObj.lastName=lName.value;
            currentUser.firstName=fName.value;
            currentUser.lastName=lName.value;
        }
        return userObj;
         
    })
    users=updated;
    localStorage.setItem('users',JSON.stringify(users));
    sessionStorage.setItem('loggedInUser',JSON.stringify(currentUser));
    currentUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
    console.log(currentUser);
}

document.getElementById("changepw").addEventListener("click",changepassword);

function changepassword(){
    if(old.value==""||newP.value==""||confirmP.value==""){alert ("all fields are mandatory")}
    else if(old.value!=currentUser.password) {alert("incorrect old password")}
    else if(newP.value!=confirmP.value){alert("new password not matches")}
    else{
        
        let updated= users.map(userObj=>{
            if( userObj.email === currentUser.email){
                userObj.password=confirmP.value;
                currentUser.password=confirmP.value;
                console.log(userObj);
            }
            
            return userObj;
            
        })
        users=updated;
        localStorage.setItem('users',JSON.stringify(users));
        sessionStorage.setItem('loggedInUser',JSON.stringify(currentUser));
        currentUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
        console.log(currentUser);
    }
    
}

document.getElementById("logout").addEventListener("click",firstpage);

function firstpage(e){
    e.preventDefault();
    sessionStorage.removeItem("loggedInUser");
    window.location.href="../index.html";
}