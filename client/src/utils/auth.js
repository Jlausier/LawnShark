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

export function getUserRoleId() {
  return getProfile().data.roleId;
}

export function getUserRole() {
  const token = getToken();
  if (!token) return "unauthenticated";
  return getProfile().data.role;
}

export function getUserInfo() {
  return getProfile().data;
}

export function loggedIn() {
  const token = getToken();
  return token && !isTokenExpired(token);
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
}

export function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function validatePassword(input) {
  return input.match(/^[A-Za-z]\w{7,14}$/);
}

export function getUserProfileLink() {
  const role = getUserRole();
  switch (role) {
    case "undefined":
      return "/Welcome";
    case "customer":
      return "/UserProfile";
    case "company":
      return `/CompanyProfile/${getUserRoleId()}`;
  }
}

export function getUserHomeLink(role) {
  switch (role) {
    case "undefined":
      return "/Welcome";
    case "customer":
      return "/JobPostings";
    case "company":
      return "/FindWork";
  }
}
