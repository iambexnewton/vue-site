import Validations from "./Validations";

export default class SignupValidations {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
  checkValidations() {
    let errors = [];

    if (!Validations.minLength(this.username, 3)) {
      errors["username"] =
        "Invalid Username, username must be longer than 3 charecters";
    }

    if (!Validations.checkPassword(this.password, 5)) {
      errors["password"] =
        "Your password should contain a minimum eight characters, at least one letter, one number and one special character";
    }
    return errors;
  }
}
