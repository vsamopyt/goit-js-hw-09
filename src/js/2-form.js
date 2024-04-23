
const feedbackForm =document.querySelector(".feedback-form");
const email = feedbackForm.elements.email;
const text = feedbackForm.elements.message;

function checkStorage () {
    
    if ((localStorage.getItem("feedback-form-state") === null) || (localStorage.getItem("feedback-form-state") === "undefined")) {
        localStorage.removeItem("feedback-form-state");
        const userData = {};
        return userData;
    };
    const userData = JSON.parse(localStorage.getItem("feedback-form-state"));

    feedbackForm.elements.email.value = userData.email !== undefined ? userData.email : "";
    feedbackForm.elements.message.value = userData.text !== undefined ? userData.text : "";
    return userData;

}

const userData = checkStorage () 

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
   

 feedbackForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    // const email = feedbackForm.elements.email;
    // const text = feedbackForm.elements.message;
    if(email.value === "" || text.value === "" ) {
        alert("Заповніть будь ласка всі поля в формі")
        return
    }

    const userData = JSON.parse(localStorage.getItem("feedback-form-state"));
    console.log(userData);
    // feedbackForm.elements.email.value = "";
    // feedbackForm.elements.message.value = "";
    email.value = "";
    text.value = "";
    localStorage.removeItem("feedback-form-state")

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

   

    


