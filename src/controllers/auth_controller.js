import {facebookLogin, signUp} from "../api/auth/authentication";

const {login} = require("../api/auth/authentication");

export class AuthController {

    async login(email: string, password: string): Promise<string> {
        console.log(email);
        return await login(email, password);
    }

    async signup(email: string, password: string): Promise<string> {
        console.log(email);
        return await signUp(email, password);
    }

    async FaceBookLogin(){
        await facebookLogin();
    }
}