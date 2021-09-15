import React from 'react';
import loginStyle from "../styles/style";
import {SafeAreaView, Text} from "react-native";
import {AuthUISingUpPage, BottomView} from "./component/basic_login_component";
import {signUp} from "../api/auth/authentication";

function onSubmit(email, password) {
    console.log(email);
    signUp(email, password);
}

const SignUp = ({navigation}) => {
    return (
        <SafeAreaView style={loginStyle.mainStyle}>
            <Text style={loginStyle.languageStyle}>English (United status)</Text>
            <AuthUISingUpPage onPress={onSubmit} isLogin={false}/>
            <BottomView navigation={navigation} isLogin={false}/>
        </SafeAreaView>
    );
}

export default SignUp;