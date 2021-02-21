function sendMail (contactForm) {
    emailjs.send("service_icucj3m","Rosie", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCES", response);
        },
        function(error) {
            console.log("FAILED MF", error);
        });
        return false;
}