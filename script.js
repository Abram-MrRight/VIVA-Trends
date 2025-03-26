document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");

    // Prevent the default form submission
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Stop form from submitting

        // Collect form data
        var params = {
            subject: document.getElementById("subject").value,
            name: document.getElementById("name").value,
            email_id: document.getElementById("email").value,
            message: document.getElementById("message").value
        };

        // Log the parameters to check the values
        console.log("Form data:", params);

        // Send email using EmailJS
        emailjs.send("service_dxha0ik", "template_qqctedr", params)
            .then(function(response) {
                // Debugging success response
                console.log("✅ Success: Response Status:", response.status);
                console.log("✅ Success: Response Details:", response);
                
                // Show success message and hide error message
                document.getElementById("successMessage").style.display = "block";
                document.getElementById("errorMessage").style.display = "none";
                contactForm.reset(); // Reset the form after successful submission
            })
            .catch(function(error) {
                // Debugging error response
                console.error("❌ Failed: Error Details:", error);
                
                // Show error message and hide success message
                document.getElementById("successMessage").style.display = "none";
                document.getElementById("errorMessage").style.display = "block";
            });
    });
});
