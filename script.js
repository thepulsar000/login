let emailEl = document.querySelector("#email");

let firstLoopEl = document.querySelector("#loopone");
let secondLoopEl = document.querySelector("#looptwo");
let thirdLoopEl = document.querySelector("#loopthree");

// Email validation
emailEl.onkeyup = function(){

  let pattern = /^[^ ]+@[^ ]+\.[a-z]{3,4}$/;

  if (emailEl.value.match(pattern)) {
    firstLoopEl.style.borderColor = "yellow";
    secondLoopEl.style.borderColor = "yellow";
    thirdLoopEl.style.borderColor = "yellow";
  } else if (emailEl.value == "") {
    firstLoopEl.style.borderColor = "whitesmoke";
    secondLoopEl.style.borderColor = "whitesmoke";
    thirdLoopEl.style.borderColor = "whitesmoke";
  } else {
    firstLoopEl.style.borderColor = "red";
    secondLoopEl.style.borderColor = "red";
    thirdLoopEl.style.borderColor = "red";
  }
}

// Password validation
let passEl = document.querySelector("#p-word");
let passEl2 = document.querySelector("#p-word2");
let passEl3 = document.querySelector("#p-word3");
let passPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

passEl.onkeyup = function(){
  if (passEl.value.match(passPattern)){
    firstLoopEl.style.borderColor = "green";
    secondLoopEl.style.borderColor = "green";
    thirdLoopEl.style.borderColor = "green";
  }
  else {
    firstLoopEl.style.borderColor = "yellow";
    secondLoopEl.style.borderColor = "yellow";
    thirdLoopEl.style.borderColor = "yellow";
  }
 }

passEl3.onkeyup = function () {
  console.log(passEl3.value);
  if(passEl2.value === passEl3.value){
    passEl3.style.color = "white";
  }else{
    passEl3.style.color = "red";
  }
}


// Sign Up page goes off
let cancelEl = document.querySelector("#cancel");
let pop_upEl = document.querySelector("#pop_up");

cancelEl.onclick = function(){
  pop_upEl.style = "visibility: hidden";
}

// Sign Up page pops out
let signUpEl = document.querySelector("#signup");
signUpEl.onclick = function(){
  pop_upEl.style = "visibility: visible";
}
