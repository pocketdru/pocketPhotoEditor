import auth0 from "auth0-js";

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: "dev-qm0-ivzk.auth0.com",
        clientID: "QNCYbMnNO5ezHlm7WMc694bM6MOenTgO",
        redirectUri: window.location + "callback",
        audience: "https://dev-qm0-ivzk.auth0.com/userinfo",
        responseType: "token id_token",
        scope: "openid" 
    });

    constructor() {
        this.login = this.login.bind(this);
    }

    login() {
        console.log('login method in auth.js')
        this.auth0.authorize();
    }
}