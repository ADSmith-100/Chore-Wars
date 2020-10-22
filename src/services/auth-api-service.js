import config from "../config";
// import decodeJwt from "jwt-decode";

const AuthApiService = {
  postLogin(credentials) {
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  postUser(user) {
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  // getCurrentUser() {
  //   const user = decodeJwt(localStorage.getItem("token"));

  //   if (user && user.accessToken) {
  //     return { "x-access-token": user.accessToken };
  //   } else {
  //     return {};
  //   }
  // },
};

export default AuthApiService;
