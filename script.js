function submit(){
    let username = document.getElementById("username").value;
    let useremail = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message").value;

    let params = {
        Full_Name: username,
        Email: useremail,
        Password: password,
        Message: message
    }
    emailjs.send("service_1t3i2r5", "template_2r0jshz", params).then((res) => {
        alert("Query Sent")
        console.log(res)
    })
    .catch((error) => {console.log(error)})
}
