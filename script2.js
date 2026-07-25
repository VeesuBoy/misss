function showMessage(){

document.getElementById("result").innerHTML =
"🥹 Thank You...<br><br>Chahe jo faisla ho, main tumhari feelings ki respect karta hoon. 😊❤️";

createHearts();

}

function createHearts(){

for(let i=0;i<40;i++){

let heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.top="-20px";
heart.style.fontSize=(20+Math.random()*25)+"px";
heart.style.animation="fall 5s linear forwards";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},5000);

}

}