  <script>
  function submit(){
      let userName = document.getElementById("username").value;
      let email = document.getElementById("email").value;
      let message = document.getElementById("password").value;
      let message = document.getElementById("message").value

      let params = {
          full_name: fullName,
          subject: subject,
          email: userEmail,
          message: message
      }
      emailjs.send("service_o99m92q", "template_1u6o39r", params).then((res) => {
          alert("Query Sent");
          console.log(res)
      })
      .catch((error) => {console.log(error)})
  }
</script>