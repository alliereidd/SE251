// JavaScript Doc
window.addEventListener("load", initialize);
function initialize(){
    var submitButton = document.getElementById("submitButton");
    submitButton.addEventListener("click", submitForm);
}



function submitForm(){
    cleanup();
    var pTags = document.querySelectorAll("#form p");
    var spans = document.querySelectorAll("span");
    var textFields = document.querySelectorAll("input[type='text']");
    var blanks = false;
    for(var i = 0; i < textFields.length;i++){
        if(textFields[i].value == ""){
            spans[i].innerHTML = "*";
            pTags[i].classList.add("red");
            blanks = true;
        }
    }
    if(blanks == false && regEx()){
        emailMatch();
    }
}



function emailMatch(){
    var email = document.getElementById("email");
    var cemail = document.getElementById("cemail");
    if(email.value === cemail.value){
        makeObject();
    }
    else{
        alert("Emails Do Not Match");
    }
}


function makeObject(){
    var first = document.getElementById("first-name");
    var last = document.getElementById("last-name");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var person = {
        fname:first.value,
        lname:last.value,
        email:email.value,
        phone:phone.value
    }
    displayResults(person);
}



function displayResults(person){
    var form = document.getElementById("form");
    form.style.display = "none";
    var confirm = document.getElementById("confirmation");
    confirm.style.display = "block";
    var info = document.getElementById("info");
    info.innerHTML = person.fname + " " + person.lname + "<br/>";
    info.innerHTML += person.email + "<br/>";
    info.innerHTML += person.phone + "<br/>";
}



function cleanup(){
    var pTags = document.querySelectorAll("#form p");
    var spans = document.querySelectorAll("span");
    var textFields = document.querySelectorAll("input[type='text']");
    for(var i = 0; i < textFields.length;i++){
        if(textFields[i].value != ""){
            spans[i].innerHTML = "";
            pTags[i].classList.remove("red");
        }
    }
}



function regEx(){
    var first = document.getElementById("first-name").value;
    var last = document.getElementById("last-name").value;
    var email = document.getElementById("email").value;
    var cemail = document.getElementById("cemail").value;
    var phone = document.getElementById("phone").value;
    var fNmRegEx = /^[a-zA-Z]+$/;
    var lNmRegEx = /^[a-zA-Z]+$/;
    var mailRegEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA Z0-9]{2,4})+$/;
    var cemailReg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA Z0-9]{2,4})+$/;
    var phoneRegEx = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    var fNmResult = fNmRegEx.test(first);
    var lNmResult = lNmRegEx.test(last);
    var mailResult = mailRegEx.test(email);
    var cemailResult = cemailReg.test(cemail);
    var phoneResult = phoneRegEx.test(phone);
    var errors = true;
    if (fNmResult == false)
        {
            alert("Your First Name Cannot Include Special Characters!");
            errors = false;
        }
    if (lNmResult == false)
        {
            alert("Your Last Name Cannot Include Special Characters!");
            errors = false;
        }
    if (mailResult == false)
        {
            alert("Please Enter A Valid Email In Valid Format!");
            errors = false;
        }
    if (cemailResult == false)
        {
            alert("Please Enter A Valid Email In Valid Format!");
            errors = false;
        }
    if (phoneResult == false)
        {
            alert("Please Enter A Valid 10-Digit Phone Number!");
            errors = false;
        }
    return errors;
}


    
    
    