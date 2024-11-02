window.onload = function() {
    const heroContent = document.querySelector('.hero-content');
    heroContent.classList.add('visible');
}



document.addEventListener("DOMContentLoaded", function() {
    rotateTaglines(); // Call the function when the page loads
});

function rotateTaglines() {
    const taglineElement = document.getElementById('tagline');

    // Array of taglines to cycle through
    const taglines = [
        "Product Manager",
        "Frontend Developer",
        "Yoga Enthusiast",
        "Retail Investor"
    ];

    let currentTaglineIndex = 0; // Track the current tagline

    // Function to rotate through the taglines
    function changeTagline() {
        const newTagline = document.createElement('span'); // Create a new span for each tagline
        newTagline.textContent = taglines[currentTaglineIndex]; // Set the tagline text
        newTagline.classList.add('appear'); // Add class for animation effects

        taglineElement.appendChild(newTagline); // Append new tagline to the parent

        // Trigger the fade-in effect
        setTimeout(() => {
            newTagline.style.opacity = 1; // Make it fully visible
        }, 10); // Small timeout to ensure opacity transition works

        currentTaglineIndex = (currentTaglineIndex + 1) % taglines.length; // Cycle through taglines

        // Remove the tagline after some time
        setTimeout(() => {
            taglineElement.removeChild(newTagline); // Remove tagline after 3 seconds
        }, 3000); // Adjust this duration to match the display time
    }

    // Set interval to change the tagline every 3 seconds
    setInterval(changeTagline, 3500); // 3500ms = 3.5 seconds for smooth transitions
}

document.getElementById('recommendationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    //get form data
    const name = event.target.name.value;
    const company = event.target.company.value;
    const role = event.target.role.value;
    const profile = event.target.profile.value;
    const recommendation = event.target.recommendation.value;

    //create a new recommendation card
    const newRecommendation = document.createElement('div');
    newRecommendation.classList.add('recommendation-card');
    newRecommendation.innerHTML = `<p><strong><a href="${profile}" target="_blank">${name}</a></strong>, ${role} at ${company}</p>
    <p>${recommendation}</p>`;

    //append new recommendation to the list
    document.getElementById('recommendationsList').appendChild(newRecommendation);

    //show thank you message
    document.getElementById('thanksMessage').style.display = 'block';

    //clear form fields
    event.target.reset();

    //hide thank you after few seconds
    setTimeout(() => {
        document.getElementById('thanksMessage').style.display ='none';
    }, 3000);
});
