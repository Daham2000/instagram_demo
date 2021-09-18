import firestore from '@react-native-firebase/firestore';
import ApiInterface from "../interfaces/api_interface";

export default class PostApi extends ApiInterface {

    static getInstance() {
        if (!PostApi._instance) {
            PostApi._instance = new PostApi();
        }
        return PostApi._instance;
    }

    async getAll(): Promise<any> {
        const users = [];
        const postsCollection = firestore().collection('post');
        await postsCollection
            .get()
            .then(querySnapshot => {
                console.log('Total post: ', querySnapshot.size);
                querySnapshot.forEach(documentSnapshot => {
                    users.push(documentSnapshot.data());
                });
            });
        return users;
    }

    get(): Promise<void> {
        return super.get();
    }

    add(): Promise<void> {
        const postsCollection = firestore().collection('post');
        postsCollection
            .add({
                description: 'Ada Lovelace',
                name: 'Ada Lovelace',
                image: 'https://www.autoretouch.com/wp-content/uploads/2021/06/Remove-Background.jpg',
                likes: 43,
                postID: 'post0002',
                profile: 'https://media.istockphoto.com/photos/vintage-view-of-london-picture-' +
                    'id157002030?k=20&m=157002030&s=612x612&w=0&h=0lxWhyx2e4VPotq36F8LoPnr09T4b' +
                    'PhVFzy0jwki_ok=',
            })
            .then(() => {
                console.log('User added!');
            });
        return super.add();
    }
}