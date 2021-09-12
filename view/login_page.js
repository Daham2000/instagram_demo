import React from 'react';
import {Image, Text, SafeAreaView, TextInput, View, TouchableHighlight} from "react-native";
import loginStyle from "../styles/style";
import {LoginButton} from "./component/basic_login_component";

const Login = () => {
    const [username, onChangeText] = React.useState("Phone number,email or username");
    const [password, onChangePassword] = React.useState("Password");
    return (
        <SafeAreaView style={loginStyle.mainStyle}>
            <Text style={loginStyle.languageStyle}>English (United status)</Text>
            <View style={loginStyle.loginForm}>
                <Image style={loginStyle.imageLogo} source={require('../assets/Instagram-Logo.png')}/>
                <TextInput
                    style={loginStyle.usernameStyle}
                    onChangeText={onChangeText}
                    placeholder="Phone number,email or username"
                    keyboardType="default"
                />
                <TextInput
                    style={loginStyle.usernameStyle}
                    onChangeText={onChangePassword}
                    secureTextEntry={true}
                    placeholder="Password"
                    keyboardType="default"
                />
                <LoginButton name="Login"/>
                <Text style={loginStyle.textForgotUserLogin}>Forgot your login details? Get help sign in.</Text>
                <Text style={loginStyle.textOR}>OR</Text>
                <TouchableHighlight>
                    <View style={loginStyle.loginFacebookView}>
                        <Image style={loginStyle.facebookLogo} source={require('../assets/fb.png')}/>
                        <Text style={loginStyle.textLoginWithFacebook}>Log in with Facebook</Text>
                    </View>
                </TouchableHighlight>
            </View>
            <View style={loginStyle.bottomBarView}>
                <TouchableHighlight>
                    <Text style={loginStyle.textForgotUserLogin}>Don't have an account? Sign up</Text>
                </TouchableHighlight>
            </View>
        </SafeAreaView>
    );
}

export default Login;