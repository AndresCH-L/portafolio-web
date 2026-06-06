const reveals =
document.querySelectorAll(

".section, .project-card, .skill-card, .certificate-card"

);

function reveal(){

    reveals.forEach(item => {

        const top =
        item.getBoundingClientRect().top;

        const windowHeight =
        window.innerHeight;

        if(top < windowHeight - 100){

            item.classList.add("active");

        }

    });

}

window.addEventListener(
"scroll",
reveal
);

reveal();