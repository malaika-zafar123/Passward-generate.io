    const lengthSlider = document.getElementById("length");

    const lengthValue = document.getElementById("length-value");

    lengthSlider.oninput = function() {
      
      lengthValue.textContent = this.value;
    };


//generate passward

    function generatePassword() {
      const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const lower = "abcdefghijklmnopqrstuvwxyz";
      const numbers = "0123456789";
      const symbols = "!@#$%^&*()_+[]{}<>?/|";


      let allChars = "";
      if (document.getElementById("uppercase").checked) allChars += upper;
      if (document.getElementById("lowercase").checked) allChars += lower;
      if (document.getElementById("numbers").checked) allChars += numbers;
      if (document.getElementById("symbols").checked) allChars += symbols;

      let password = "";
      const length = lengthSlider.value;

      if (allChars === "") {
        alert("Please select at least one option!");
        return;
      }

      for (let i = 0; i < length; i++) {
        password += allChars.charAt(Math.floor(Math.random() * allChars.length));
      }

      document.getElementById("password").value = password;
    }


    //copy passward

    function copyPassword() {
      const passwordField = document.getElementById("password");
      passwordField.select();
      document.execCommand("copy");
      alert("Password copied to clipboard!");
    }