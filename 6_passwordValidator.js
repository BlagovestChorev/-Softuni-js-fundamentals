function validatePassword(password) {
    let isValid = true;
    let messages = [];
  
    if (password.length < 6 || password.length > 10) {
      isValid = false;
      messages.push("Password must be between 6 and 10 characters");
    }
  
    if (!/^[a-zA-Z0-9]+$/.test(password)) {
      isValid = false;
      messages.push("Password must consist only of letters and digits");
    }
  
    if ((password.match(/[0-9]/g) || []).length < 2) {
      isValid = false;
      messages.push("Password must have at least 2 digits");
    }
  
    if (isValid) {
      console.log("Password is valid");
    } else {
      messages.forEach((message) => {
        console.log(message);
      });
    }
  }
  
  // Example usage:
  const password = 'login';
  validatePassword(password);