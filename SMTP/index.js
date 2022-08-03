function sendEmail()
{
    let name = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "siddharthsaachi@gmail.com",
        Password : "1ECFFB485790748927115734F1508630774F",
        To : email ,
        From : "siddharthsaachi@gmail.com",
        Subject: "Sending Email using javascript",
        Body: "Well that was easy!!",
        html : "<h1>name</h1>"
    })
    .then(function (message) {
          alert("Mail has been sent successfully")
        });
}