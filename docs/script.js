function greet() {

    const emailInput = document.getElementById('email'); 
    const email = emailInput.value.trim();


    if (email === "") { 
        alert ("invalid");

        return;
    }

    alert("Thank you for Subscribing!");

}

const contactpage = document.getElementById('contactpage');

contactpage.addEventListener('click', (event) => {
    event.preventDefault();

    const contactSection = document.getElementById('contact');

    contactSection.scrollIntoView({behavior: 'smooth'});

});
