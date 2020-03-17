/* eslint no-restricted-globals: 0 */
import auth0 from "auth0-js";
import jwtDecode from "jwt-decode";

const LOGIN_SUCCESS_PAGE = "/myfeed";
const LOGIN_FAILURE_PAGE = "/";

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: "dev-qm0-ivzk.auth0.com",
        clientID: "QNCYbMnNO5ezHlm7WMc694bM6MOenTgO",
        redirectUri: window.location + "callback",
        audience: "https://dev-qm0-ivzk.auth0.com/userinfo",
        responseType: "token id_token",
        scope: "openid profile" 
    });

    constructor() {
        this.login = this.login.bind(this);
    }

    login() {
        console.log('login method in auth.js')
        this.auth0.authorize();
    }

    handleAuthentication() {
        console.log('parse hash')
        this.auth0.parseHash((err, authResults) => {
            console.log(authResults);
            if (authResults && authResults.accessToken && authResults.idToken) {
                let expiresAt = JSON.stringify((authResults.expiresIn) * 1000 + new Date().getTime());
                localStorage.setItem("access_token", authResults.accessToken);
                localStorage.setItem("id_token", authResults.idToken);
                localStorage.setItem("expires_at", expiresAt);
                window.location.hash = "";
                window.location.pathname = LOGIN_SUCCESS_PAGE;

            } else if (err) {
                window.location.pathname = LOGIN_FAILURE_PAGE;
                console.log(err);
            }
        })
    }

    isAuthenticated() {
        let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
        return new Date().getTime() < expiresAt;
    }

    logout() {
        localStorage.removeItem("access_token");
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
        window.location.pathname = LOGIN_FAILURE_PAGE;
    }

    getProfile() {
        if(localStorage.getItem("id_token")) {
            return jwtDecode(localStorage.getItem("id_token"));
        } else {
            return {};
        }
    }
}