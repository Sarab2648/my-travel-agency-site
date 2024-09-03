// Scroll to Calculator Section
function scrollToCalculator() {
    document.getElementById('calculator').scrollIntoView({
        behavior: 'smooth'
    });
}

// Trip Cost Calculator
function calculateTripCost() {
    const destination = document.getElementById('destination').value;
    const travelers = parseInt(document.getElementById('travelers').value);
    const accommodation = document.getElementById('accommodation').value;

    let baseCost = 0;
    switch (destination) {
        case 'paris': baseCost = 1000; break;
        case 'maldives': baseCost = 1500; break;
        case 'newyork': baseCost = 800; break;
    }

    let accommodationCost = 0;
    switch (accommodation) {
        case 'luxury': accommodationCost = 500; break;
        case 'midrange': accommodationCost = 300; break;
        case 'budget': accommodationCost = 100; break;
    }

    const totalCost = (baseCost + accommodationCost) * travelers;
    document.getElementById('cost-output').innerText = `Total Trip Cost: $${totalCost}`;
}

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate sending email
    alert(`Email sent! \n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);

    document.getElementById('email-status').innerText = 'Thank you for contacting us! We will get back to you soon.';
});

// Initialize AOS (Animate on Scroll)
AOS.init();
