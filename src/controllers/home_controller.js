import {logOut} from "../api/auth/authentication";

export class HomeController{
    logoutAction(){
        logOut();
    }
}