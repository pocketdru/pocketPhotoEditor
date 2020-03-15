import auth0 from "auth0-js";

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: "dev-qm0-ivzk.auth0.com",
        clientID: "QNCYbMnNO5ezHlm7WMc694bM6MOenTgO",
        redirectUri: "http://localhost:3000" && "https://pocket-photo-editor-ma.herokuapp.com/",
        audience: "http://dev-qm0-ivzk.auth0.com/userinfo",
        responseType: "token id_token",
        scope: "openid" 
    });

    constructor() {
        this.login = this.login.bind(this);
    }

    login() {
        this.auth0.authorize();
    }
}