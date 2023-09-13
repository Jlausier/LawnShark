import decode from "jwt-decode";

export function getProfile() {
  return decode(getToken());
}

export function getUserEmail() {
  return getProfile().data.email;
}

export function getUserId() {
  return getProfile().data._id;
}

export function getUserRole() {
  return getProfile().data.role;
}

export function loggedIn() {
  const token = getToken();
  return token && !isTokenExpired(token) ? true : false;
}

export function isTokenExpired(token) {
  const decoded = decode(token);
  if (decoded.exp < Date.now() / 1000) {
    localStorage.removeItem("id_token");
    return true;
  }
  return false;
}

export function getToken() {
  return localStorage.getItem("id_token");
}

export function loginUser(idToken) {
  localStorage.setItem("id_token", idToken);
}

export function logoutUser() {
  localStorage.removeItem("id_token");
  window.location.reload();
}
export function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function checkPassword(input) {
  const passw = /^[A-Za-z]\w{7,14}$/;
  if (input.match(passw)) {
    return true;
  }
  return false;
}
