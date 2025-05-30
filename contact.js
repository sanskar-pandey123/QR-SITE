
window.addEventListener("load", () => { 
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionEnd",() =>{
        document.body.removeChild("loader");
    })
})

const buttonsub = document.querySelector(".submit-btn");
buttonsub.addEventListener("click", function() { 
const name1 = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

    let isValid = true;
    if(name1.value.trim() === ""){
        name1.placeholder="Name feild is Empty* first please enter your name!";
        name1.classList.add("error");
        isValid = false;
    }else{
        name1.placeholder="Enter your name.";
        name1.classList.remove("error");
    }
    if(email.value.trim() === ""){
        email.placeholder="email feild is Empty* first please enter your Email!";
        email.classList.add("error");
        isValid = false;
    }else{
        email.placeholder="Enter your email.";
        email.classList.remove("error");
    }
    if(message.value.trim() === ""){
        message.placeholder="Mendatory Feild* Please Enter Your Message "
        message.classList.add("error");
        isValid = false;
    }else{
        message.placeholder="Enter Message ";
        email.classList.remove("error");
    }
    if(isValid){
        alert("Message Sent Successfully.");
    }
});

