/* ===========================
   FUNVRO PRO
=========================== */

// Typing Animation

const text = "Sub2Funvro";
const typing = document.getElementById("typing");

let i = 0;
let deleting = false;

function type() {

    if (!deleting) {

        typing.textContent = text.substring(0, i + 1);

        i++;

        if (i === text.length) {

            deleting = true;

            setTimeout(type, 1800);

            return;

        }

    } else {

        typing.textContent = text.substring(0, i - 1);

        i--;

        if (i === 0) {

            deleting = false;

        }

    }

    setTimeout(type, deleting ? 90 : 180);

}

type();


// Card Hover Effect

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mousemove",e=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.background=
`radial-gradient(circle at ${x}px ${y}px,
rgba(0,170,255,.25),
rgba(255,255,255,.06))`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="rgba(255,255,255,.06)";

});

});


// Floating Particles

for(let i=0;i<25;i++){

let particle=document.createElement("div");

particle.className="particle";

let size=Math.random()*8+4;

particle.style.width=size+"px";

particle.style.height=size+"px";

particle.style.left=Math.random()*100+"vw";

particle.style.top=Math.random()*100+"vh";

particle.style.animationDuration=
(Math.random()*10+8)+"s";

particle.style.animationDelay=
Math.random()*5+"s";

document.body.appendChild(particle);

}


// Fade In

window.onload=()=>{

document.body.style.opacity="1";

};