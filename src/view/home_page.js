import React, {Component} from 'react';
import {Button, SafeAreaView, View} from "react-native";
import {HomeController} from "../controllers/home_controller";
import {AppBarNative} from "./component/home_component";
import {homeStyle} from "../styles/home_style";


export default class HomePage extends Component {
    render() {
        let ctrl = new HomeController();
        return (
            <SafeAreaView style={homeStyle.mainStyle}>
                <View>
                    <AppBarNative/>
                </View>
                <View>
                </View>
            </SafeAreaView>
        )
    }
}