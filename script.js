    // Define the sendMessage function
    function sendMessage(event) {

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        const templateParams = {
            name: name,
            email: email,
            subject: subject,
            message: message
        };

        // Send email using EmailJS
        emailjs.send("service_dxha0ik", "template_bmxamho", templateParams)
        .then(function(response) {
            document.getElementById('successMessage').style.display = 'block';
            document.getElementById('errorMessage').style.display = 'none';
        }, function(error) {
            document.getElementById('errorMessage').style.display = 'block';
            document.getElementById('successMessage').style.display = 'none';
        });
    }

