export default class Validations {
  static minLength(username, minLength) {
    if (username.length < minLength) {
      return false;
    }
    return true;
  }
  static checkPassword(password) {
    if (
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
        password,
      )
    ) {
      return true;
    }
    return false;
  }
}
