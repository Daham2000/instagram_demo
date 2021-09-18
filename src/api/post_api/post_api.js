import firestore from '@react-native-firebase/firestore';
import type {ApiInterface} from "../interfaces/api_interface";

export class PostApi extends ApiInterface{
    
    static getInstance() {
        if (!PostApi._instance) {
            PostApi._instance = new PostApi();
        }
        return PostApi._instance;
    }

    getAll(): Promise<void> {
        const usersCollection = firestore().collection('post');
        const posts = usersCollection.get();
        console.log(posts)
    }

    get(): Promise<void> {
        return super.get();
    }

    add(): Promise<void> {
        return super.add();
    }
}