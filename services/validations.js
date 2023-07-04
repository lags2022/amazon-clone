const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const validPassword = /\d+/; //para q la contraseña tenga al menos un numero

export const validLogin = ({ email, password }) => {
  let errors = {};
  //email
  if (!email) errors.email = "Required";
  else if (!validEmail.test(email)) errors.email = "Invalid email";
  else if (email.length > 40)
    errors.email = "Email must be less than 40 characters";
  else if (email.includes(" ")) errors.email = "Email have spaces";

  //password
  if (!password) errors.password = "Required";
  else if (password.includes(" ")) errors.password = "Password have spaces";
  return errors;
};

export const validRegister = ({ username, email, password, cpassword }) => {
  let errors = {};
  //username
  if (!username) errors.username = "Required";
  else if (username.length > 30)
    errors.username = "Username must be less than 30 characters";

  //email
  if (!email) errors.email = "Required";
  else if (!validEmail.test(email)) errors.email = "Invalid email";
  else if (email.length > 40)
    errors.email = "Username must be less than 40 characters";
  else if (email.includes(" ")) errors.email = "Username have spaces";

  //password
  if (!password) errors.password = "Required";
  else if (!validPassword.test(password))
    errors.password = "Password must have at least one number";
  else if (password.length < 6 || password.length > 40)
    errors.password = "Password must be between 6 and 40 characters long";
  else if (password.includes(" ")) errors.password = "Password have spaces";

  //cpassword
  if (!cpassword) errors.cpassword = "Required";
  else if (password !== cpassword) errors.cpassword = "Password Not Match...!";

  return errors;
};
