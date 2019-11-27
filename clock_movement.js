setInterval(setClock,1000);
var sechand=document.getElementById("sec");
var minhand=document.getElementById("min");
var hourhand=document.getElementById("hour");

function setClock(){
   const date = new Date();
    const second = date.getSeconds()/60;
    const minute = date.getMinutes()/60;
    const hours =( (minute/1.1)+date.getHours())/12;
    sechand.style.transform="rotate("+((second*360)+180)+"deg)";
    minhand.style.transform="rotate("+((minute*360)+180)+"deg)";
    hourhand.style.transform="rotate("+((hours*360)+180)+"deg)";
    
}

setClock();

