import React from 'react';
import {Button, SafeAreaView} from "react-native";
import {HomeController} from "../controllers/home_controller";
import {AppBar} from "./component/home_component";

const HomePage = () => {
    let ctrl = new HomeController();
    return (
        <SafeAreaView>
            <AppBar/>
            <Button title="Logout" onPress={ctrl.logoutAction}/>
        </SafeAreaView>
    );
}

export default HomePage;