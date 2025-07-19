document.addEventListener('DOMContentLoaded', () => {

    const hamburgerButton = document.getElementById('hamburger-btn');
    const navigation = document.getElementById('main-nav');

    if (hamburgerButton && navigation) {
        hamburgerButton.addEventListener('click', () => {
            navigation.classList.toggle('open');
            hamburgerButton.classList.toggle('open');
        });
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); 

            const formData = {
                name: document.getElementById('name').value.trim(),
                email: document.getElementById('email').value.trim(),
                message: document.getElementById('message').value.trim()
            };

            const formValues = Object.values(formData);
            let isValid = true;

            formValues.forEach(value => {
                if (value === '') {
                    isValid = false;
                }
            });

            if (!isValid) {
                alert('Please fill out all fields.');
                return; 
            }

            const subject = `Contact Form Submission from ${formData.name}`;
            const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
            
            const mailtoLink = `mailto:dalin@stone.enterprises?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            window.open(mailtoLink, '_blank');
        });
    }
});