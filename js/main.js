window.addEventListener("scroll", () => {

    const header =
    document.querySelector(".header");

    if(window.scrollY > 50){

        header.style.background =
        "rgba(15,23,42,.98)";

    }else{

        header.style.background =
        "rgba(15,23,42,.95)";

    }

});