const phrases = [

    "Desarrollador Web Frontend Junior",

    "Arquitectura de Plataformas TI",

    "Especialista en Interfaces Responsivas",

    "Apasionado por la Tecnología",

    "Disponible para Prácticas Profesionales"

];

let currentPhrase = 0;
let currentLetter = 0;

const text =
document.getElementById("typing-text");

function type(){

    if(currentLetter < phrases[currentPhrase].length){

        text.textContent +=
        phrases[currentPhrase].charAt(currentLetter);

        currentLetter++;

        setTimeout(type,70);

    }else{

        setTimeout(erase,2000);

    }

}

function erase(){

    if(currentLetter > 0){

        text.textContent =
        phrases[currentPhrase].substring(
            0,
            currentLetter - 1
        );

        currentLetter--;

        setTimeout(erase,40);

    }else{

        currentPhrase++;

        if(currentPhrase >= phrases.length){

            currentPhrase = 0;

        }

        setTimeout(type,500);

    }

}

text.textContent = "";

type();