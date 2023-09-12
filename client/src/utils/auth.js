import decode from "jwt-decode";

export function getProfile() {
  return decode(getToken());
}

export function getUserId() {
  return "64fe862c323bd14816cff8a0";
  // return getProfile().data._id;
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

export function login(idToken) {
  localStorage.setItem("id_token", idToken);
  window.location.assign("/");
}

export function logout() {
  localStorage.removeItem("id_token");
  window.location.reload();
}
