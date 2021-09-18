import Authentication from "../../api/auth/authentication";
import PostApi from "../../api/post_api/post_api";

const authentication = Authentication.getInstance();
const postApi = PostApi.getInstance();

export class HomeController {
    logoutAction() {
        authentication.logOut();
    }

    async getAllPost(): Promise<any> {
        return postApi.getAll();
    }

    async addPost(): Promise<any> {
        return postApi.add();
    }
}