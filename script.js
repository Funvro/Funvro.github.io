/* ============================= */
/*       SUB2FUNVRO TYPING       */
/* ============================= */

const text = "Sub2Funvro";
const typing = document.getElementById("typing");

let i = 0;
let deleting = false;

function typeEffect(){

    if(!deleting){

        typing.textContent = text.substring(0,i+1);

        i++;

        if(i===text.length){

            deleting=true;

            setTimeout(typeEffect,1800);

            return;

        }

    }else{

        typing.textContent=text.substring(0,i-1);

        i--;

        if(i===0){

            deleting=false;

        }

    }

    setTimeout(typeEffect,deleting?90:170);

}

typeEffect();


/* ============================= */
/*      FLOATING PARTICLES       */
/* ============================= */

const particles = document.getElementById("particles");

for(let i=0;i<40;i++){

    const p=document.createElement("span");

    p.className="particle";

    p.style.left=Math.random()*100+"%";

    p.style.width=(Math.random()*6+3)+"px";

    p.style.height=p.style.width;

    p.style.animationDuration=(Math.random()*8+8)+"s";

    p.style.animationDelay=(Math.random()*6)+"s";

    particles.appendChild(p);

}


/* ============================= */
/*      CARD ENTRANCE            */
/* ============================= */

const cards=document.querySelectorAll(".link-card");

cards.forEach((card,index)=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

setTimeout(()=>{

card.style.transition=".7s ease";

card.style.opacity="1";

card.style.transform="translateY(0px)";

},300+(index*180));

});


/* ============================= */
/*     PREMIUM HOVER EFFECT      */
/* ============================= */

cards.forEach(card=>{

card.addEventListener("mousemove",e=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.background=

`radial-gradient(circle at ${x}px ${y}px,
rgba(0,170,255,.20),
rgba(255,255,255,.06))`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="rgba(255,255,255,.07)";

});

});


/* ============================= */
/*      LOGO PULSE               */
/* ============================= */

const logo=document.querySelector(".logo-glow");

setInterval(()=>{

logo.animate([

{transform:"scale(1)"},

{transform:"scale(1.05)"},

{transform:"scale(1)"}

],{

duration:2200

});

},2200);
/* Smooth page fade-in */

document.body.style.opacity = "0";

window.addEventListener("load", () => {
    document.body.style.transition = "opacity 0.8s ease";
    document.body.style.opacity = "1";
});
