import React, {useState} from 'react';
import {Text, SafeAreaView, ActivityIndicator} from "react-native";
import loginStyle from "../styles/style";
import {BottomView, AuthUIPage} from "./component/basic_login_component";
import {login} from "../api/auth/authentication";
import {MassageType} from "./constants/constants_auth";

async function onSubmit(email, password) {
    await login(email, password);
}

const Login = ({navigation}) => {

    return (
        <SafeAreaView style={loginStyle.mainStyle}>
            <Text style={loginStyle.languageStyle}>English (United status)</Text>
            <AuthUIPage onPress={onSubmit}/>
            <BottomView navigation={navigation} isLogin={true}/>
        </SafeAreaView>
    );


}

export default Login;