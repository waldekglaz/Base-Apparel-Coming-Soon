//  button element
const btn = document.querySelector(".btn")

// email validation
const checkEmail = () => {
    const email = document.getElementsByClassName("email");
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email[0].value).toLowerCase());
  }
// clic event on the button
btn.addEventListener('click', (e)=>{
    e.preventDefault();
    const errorText = document.querySelector(".email-warning");
    const errorImg = document.querySelector(".img-error");
    const emailSucces = document.querySelector(".email-success");
    if(!checkEmail()){
        errorText.classList.add("active");
        errorImg.style.opacity = "1";
        
    }
    else{
        errorText.classList.remove("active");
        errorImg.style.opacity = "0"
        emailSucces.classList.add("active")
    }
//     

});



//   const btnFunction = () => {
//     const errorText = document.getElementsByClassName("email-warning");
//     const errorImg = document.getElementsByClassName("img-error");
//     const emailInput = document.getElementsByClassName("email");
//     if(!checkEmail()) {
//         errorText.style.display = "block"
//     //   errorText[0].style.opacity = "100%";
//     //   errorImg[0].style.opacity = "100%";
//     //   emailInput[0].style.borderColor = "hsl(0, 93%, 68%)";
//     }
//     else {
//       errorText[0].style.opacity = "0%";
//       errorImg[0].style.opacity = "0%";
//       emailInput[0].style.borderColor = "hsl(0, 36%, 70%)";
//     }
//   }