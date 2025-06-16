function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email:document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        number:document.getElementById("number").value,
        description:document.getElementById("message").value,
    }

    emailjs.send("service_xe53ymi","template_k4wi2e8",parms).then(alert("Email Sent!!"))
}