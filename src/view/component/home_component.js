import {Appbar} from "react-native-paper";
import React from 'react';
import {homeStyle} from "../../styles/home_style";
import {Image, View} from "react-native";
import loginStyle from "../../styles/style";

export function AppBarNative() {
    return <Appbar style={homeStyle.appbar}>
        <View style={homeStyle.imageView}>
            <Image style={loginStyle.imageLogo} source={require('../../../assets/Instagram-Logo.png')}/>
        </View>
        <View style={homeStyle.rightView}>
            <Image resizeMode="contain"
                   style={homeStyle.appbarIcon} source={require('../../../assets/like.png')}/>
            <Image resizeMode="contain"
                   style={homeStyle.appbarIcon} source={require('../../../assets/share.png')}/>
        </View>
    </Appbar>;
}