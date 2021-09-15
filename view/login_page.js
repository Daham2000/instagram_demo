import React from 'react';
import {Text, SafeAreaView} from "react-native";
import loginStyle from "../styles/style";
import {BottomView, AuthUIPage} from "./component/basic_login_component";
import {AuthController} from "../controllers/auth_controller";

const Login = ({navigation}) => {
    return (
        <SafeAreaView style={loginStyle.mainStyle}>
            <Text style={loginStyle.languageStyle}>English (United status)</Text>
            <AuthUIPage onPress={new AuthController().login}/>
            <BottomView navigation={navigation} isLogin={true}/>
        </SafeAreaView>
    );
}

export default Login;