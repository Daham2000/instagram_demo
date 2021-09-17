import Authentication from "../../api/auth/authentication";

const authentication = Authentication.getInstance();

export class HomeController {
    logoutAction() {
        authentication.logOut();
    }
}