{
const welcome = () => console.log("Witam serdecznie");


const toggleBackgroundColor = () => {
    
    const body = document.querySelector(".js-body");
    const heder__buttonDark = document.querySelector(".js-heder__buttonDark");
    const header__front = document.querySelector(".js-header__front");
    const aside__list = document.querySelector(".js-aside__list");
    
    body.classList.toggle("header__button--dark"); 
    header__front.classList.toggle("header__button--dark");
    aside__list.classList.toggle("header__button--dark");
    

    if (body.classList.contains("header__button--dark")) {
        heder__buttonDark.innerText = "Dark";
    }
    else {
        heder__buttonDark.innerText = "White";
    }
};

const init = () => {
    const header__button = document.querySelector(".js-header__button");

    header__button.addEventListener("click", toggleBackgroundColor);
    welcome();
};

init();

}