import React from 'react';
import {Button, SafeAreaView} from "react-native";
import {logOut} from "../api/auth/authentication";

function logOutAction(){
    logOut();
}

const HomePage = () => {
    return (<SafeAreaView>
        <Button title="Logout" onPress={logOutAction}/>
    </SafeAreaView>);
}

export default HomePage;