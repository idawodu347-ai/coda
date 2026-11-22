
const menuButton = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", function() {
    navMenu.classList.toggle("active");
});

const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
const enquiryForm = document.getElementById("enquiry-form");

enquiryForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("client-name").value;
    const email = document.getElementById("client-email").value;
    const service = document.getElementById("client-service").value;
    const message = document.getElementById("client-message").value;

    const whatsappMessage =
        "Hello CODA Digital Agency!\n\n" +
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Service: " + service + "\n" +
        "Project Details: " + message;

    const whatsappURL =
        "https://wa.me/2348085372524?text=" +
        encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank");
});
 
