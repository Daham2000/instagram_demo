import {Text, TouchableHighlight} from "react-native";
import loginStyle from "../../styles/style";
import React from 'react';

export function LoginButton(props) {
    return <TouchableHighlight style={loginStyle.submit}>
        <Text style={loginStyle.submitText}>{props.name}</Text>
    </TouchableHighlight>;
}