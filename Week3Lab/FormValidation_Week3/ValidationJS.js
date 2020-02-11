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
    if(blanks == false){
        emailMatch();
    }

}


function emailMatch(){
    var email = document.getElementById("email");
    var cemail = document.getElementById("cemail");
   
    if(email.value === cemail.value){
        displayResults();
    }
    else{
        alert("Emails Do Not Match");
    }
}



function displayResults(){
    
    var first = document.getElementById("first-name");
    var last = document.getElementById("last-name");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    
    var form = document.getElementById("form");
    form.style.display = "none";
    
    var confirm = document.getElementById("confirmation");
    confirm.style.display = "block";
   
    var info = document.getElementById("info");
    
    info.innerHTML = first.value + " " + last.value + "<br/>";
    info.innerHTML += email.value + "<br/>";
    info.innerHTML += phone.value + "<br/>";
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