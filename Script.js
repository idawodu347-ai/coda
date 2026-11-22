

const menuButton = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuButton && navMenu) {
    menuButton.addEventListener("click", function() {
        navMenu.classList.toggle("active");
    });
}

const backToTop = document.getElementById("back-to-top");

if (backToTop) {
    window.addEventListener("scroll", function() {
        backToTop.style.display =
            window.scrollY > 300 ? "block" : "none";
    });

    backToTop.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

const enquiryForm = document.getElementById("enquiry-form");

if (enquiryForm) {
    enquiryForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("client-name").value.trim();
        const email = document.getElementById("client-email").value.trim();
        const service = document.getElementById("client-service").value;
        const message = document.getElementById("client-message").value.trim();

        const whatsappMessage =
            "Hello CODA Digital Agency!\n\n" +
            "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Service: " + service + "\n" +
            "Project Details: " + message;

        const whatsappURL =
            "https://wa.me/2348085372524?text=" +
            encodeURIComponent(whatsappMessage);

        alert("Thank you for contacting CODA! Your WhatsApp enquiry is ready.");

        window.location.href = whatsappURL;
    });
}
