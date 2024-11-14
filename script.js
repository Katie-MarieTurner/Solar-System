const menu = document.getElementById("menu");
const options = document.getElementById("options");
const Btn1 = document.getElementById("Btn1");
const Btn2 = document.getElementById("Btn2");
const Btn3 = document.getElementById("Btn3");

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~[On Load]~~~~~~~~~~~~~~~~~~~~~~~~~~ */

window.addEventListener("load", function() {
    alert("Use the keyboard shortcut Ctrl - to see objects that move out of view :)");
});

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~[Menu Button Functionality]~~~~~~~~~~~~~~~~~~~~~~~~~~ */

menu.addEventListener("click", e => {
    options.classList.toggle("optionsshown");
    options.classList.toggle("optionshidden");
});

/*! ~~~~~~~~~~~~~~~~~~~~~~~~~~[Options Menu Functionality]~~~~~~~~~~~~~~~~~~~~~~~~~~ */

Btn1.addEventListener("click", e => {
    Btn1.innerText = "The size of each of the model planets in comparison to both the model Sun and eachother are relatively accurate. For the purpose of this project, they have been significantly reduced for your consumption.";
    Btn1.classList.toggle("Btn1Info");
}, { once: true });

Btn2.addEventListener("click", e => {
    Btn2.innerText = "The speed of which the model planets orbit around the model Sun are again accurate in comparison. Neptune takes 1 hour, 40 minutes and 19 seconds to orbit completely in this model, and 165 years in reality!";
    Btn2.classList.toggle("Btn2Info");
}, { once: true });

Btn3.addEventListener("click", e => {
    Btn3.innerText = "The distance between planets in reality is far too vast for this model. For example, Mercury orbits around 60 Suns away from the Sun's surface despite being the closest! Another inaccuracy is that all of the model planets begin their orbits from the same position, which is unrealistic.";
    Btn3.classList.toggle("Btn3Info");
}, { once: true });

