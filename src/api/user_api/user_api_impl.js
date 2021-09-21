import UserInterface from "../interfaces/user_api";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";

export default class UserApi extends UserInterface {

    static getInstance() {
        if (!UserApi._instance) {
            UserApi._instance = new UserApi();
        }
        return UserApi._instance;
    }

    async followUser(uid: string): Promise<void> {
        const uidMy = auth().currentUser.uid;
        let refID;
        let followers = [""];
        const usersCollection = firestore().collection('users');
        await usersCollection.where('uid', '==', uidMy)
            .limit(1).get().then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    refID = documentSnapshot.ref.id;
                    followers = documentSnapshot.data().followers;
                });
            });
        if (followers === undefined) {
            followers = [];
        }
        let isExits = followers.includes(uid);
        if (isExits === false) {
            followers.push(uid);
            usersCollection.doc(refID).update(
                {
                    followers: followers
                }
            ).then(() => {
                console.log("Added the new follower...")
            });
        } else {
            console.log("User already available...")
        }
    }


    async getFollowers(): Promise<[]> {
        const uidMy = auth().currentUser.uid;
        let followers = [];
        const usersCollection = firestore().collection('users');
        await usersCollection.where('uid', '==', uidMy)
            .limit(1).get().then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    followers = documentSnapshot.data().followers;
                });
            });
        return followers;
    }
}