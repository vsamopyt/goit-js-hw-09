
const feedbackForm =document.querySelector(".feedback-form");
const email = feedbackForm.elements.email;
const text = feedbackForm.elements.message;

let userData;

function checkStorage () {
    let  userData;
    if ((localStorage.getItem("feedback-form-state") === null)) {
        userData = {};
        return userData;
      
    };
     userData = JSON.parse(localStorage.getItem("feedback-form-state"));

    feedbackForm.elements.email.value = userData.email !== undefined ? userData.email : "";
    feedbackForm.elements.message.value = userData.text !== undefined ? userData.text : "";
    return userData; 
}

userData = checkStorage () 

function getUserData (userData, event) {
    
    if(event.target.nodeName  !== "INPUT" && event.target.nodeName !== "TEXTAREA") { 
        return
    }
    if(event.target.nodeName  === "INPUT") {
        userData.email =event.target.value.trim();
    }
    else if (event.target.nodeName  === "TEXTAREA") {
        userData.text =event.target.value.trim();
    }
    return userData;
}


function saveToStorage (object) {
    localStorage.setItem("feedback-form-state", JSON.stringify(object));
}


feedbackForm.addEventListener("input", (event)=>{
   
    const storDate = getUserData (userData, event);
    saveToStorage (storDate);

 })
   

 feedbackForm.addEventListener("submit", (event,)=>{
    event.preventDefault();
    console.log(text.value === "");
    if(email.value.trim() === "" || text.value.trim() === '' ) {
        alert("Fill please all fields")
        return
    }

    userData = JSON.parse(localStorage.getItem("feedback-form-state"));
    console.log(userData);
    email.value = "";
    text.value = "";
    localStorage.removeItem("feedback-form-state");
    userData = {};

 })


email.addEventListener("focus",function placeholder () {
    this.setAttribute("placeholder", "Type area");
        
});

email.addEventListener("blur",function placeholder1 () {
    this.removeAttribute("placeholder");
        
});

text.addEventListener("focus",function placeholder () {
    this.setAttribute("placeholder", "Type area");    
});

text.addEventListener("blur",function placeholder1 () {
    this.removeAttribute("placeholder");
});

   

    


