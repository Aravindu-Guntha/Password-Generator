const inputslider=document.getElementById("inputslider");
const slidervalue=document.getElementById("slidervalue");
const passbox=document.getElementById("passbox");
const lowercaseE1=document.getElementById("lowercase");
const uppercaseE1=document.getElementById("uppercase");
const numbersE1=document.getElementById("numbers");
const symbolsE1=document.getElementById("symbols");
const generateBtn=document.getElementById("getBtn");
const copyicon=document.getElementById("copyicon");


const lowercaseLetters="abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters="ABCDEFGHIJKUMNOPQRSTUVWXY ";
const numbers="0123456789"; 
const symbols="!@#$%^&*()_+[]{}\\|;:\",./<>?"; 

slidervalue.textContent=inputslider.value;
inputslider.addEventListener("input",()=>{
    slidervalue.textContent=inputslider.value;
})

generateBtn.addEventListener("click",()=>{
    passbox.value=generatepassword(); // call the function
})

function generatepassword(){
    // getting the length of password length value
    const length=inputslider.value;
    let characters="";
    let password="";

    // checking wether its checked or unchecked
    characters +=lowercaseE1.checked ? lowercaseLetters: "";
    characters +=uppercaseE1.checked ? uppercaseLetters: "";
    characters +=numbersE1.checked ? numbers: "";
    characters +=symbolsE1.checked ? symbols: "";

    for(let i=0;i<length;i++) {
        password+=characters.charAt(Math.floor(Math.random()*characters.length));
    }
    return password
}

// for copying and mark as checked after copying
copyicon.addEventListener("click",() =>{
    if(passbox.value!="" || passbox.value.length>=10) {
        navigator.clipboard.writeText(passbox.value);
        copyicon.innerText="check";

        // time take to uncheck after copying
        setTimeout(() =>{
            copyicon.innerHTML="content_copy";
        }, 3000)
    }

})





