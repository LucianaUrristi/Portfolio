//Haz tú validación en javascript acá
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('formcontato__form');
    let users = JSON.parse(localStorage.getItem("users")) || [];

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const nombre = form.querySelector('input[name="nombre"]').value.trim();
        const email = form.querySelector('input[name="email"]').value.trim();
        const asunto = form.querySelector('input[name="asunto"]').value.trim();

        if (nombre === "" ||
            email === "" ||
            asunto === "" ){
            showError("Por favor, completa los campos obligatorios.");
            return;
        }

        const user = {
            nombre,
            email,
            asunto
        };
        users.push(user);

        localStorage.setItem("users", JSON.stringify(users));
        form.reset();
    });

    function showError(message) {
        const error = document.querySelector(".error");
        error.textContent = message;

        setTimeout(() => {
            error.textContent = "";
        }, 2000);
    }
        
    
});

    function changeRadioButtonSelection(selectedRadioButton) {
        const radioButtons = document.getElementsByName('radio');
        const clickedIndex = Array.from(radioButtons).indexOf(selectedRadioButton);
        const nextIndex = (selectedIndex + 1) % radioButtons.length;
        radioButtons[nextIndex].checked = true;
    };


// vvvvvvvvv Menú hamburguesa vvvvvvvvv

const BURGER_ID = document.getElementById("burger");
const CLOSE_NAV = document.getElementById("close-nav");
const OPEN_NAV = document.getElementById("myNav");

function hide(e) {
    e.preventDefault();
    OPEN_NAV.classList.toggle("hidden");
    document.body.classList.toggle("no-scroll");
}
BURGER_ID.addEventListener("click", (e) => {
    hide(e);
});
CLOSE_NAV.addEventListener("click", (e) => {
    hide(e);
});


document.querySelectorAll("#myNav a").forEach(link => {
    link.addEventListener("click", (e) => {
        const targetSectionId = e.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetSectionId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
        hide(e);
    });
});