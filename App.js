import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import Login from "./src/view/login_page";
import SignUp from "./src/view/sign_up_page";
import auth from '@react-native-firebase/auth';
import {ActivityIndicator, Platform, StatusBar, View} from "react-native";
import HomePage from "./src/view/home_page";

const Stack = createNativeStackNavigator();

const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;

export default function App() {
    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        return auth().onAuthStateChanged(onAuthStateChanged); // unsubscribe on unmount
    }, []);

    if (initializing) return <ActivityIndicator size="large" color="#00ff00"/>;

    if (!user) {
        console.log("User not available")
        return (
            <NavigationContainer>
                <StatusBarCompo/>
                <Stack.Navigator screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen name="Login" component={Login}/>
                    <Stack.Screen name="SignUp" component={SignUp}/>
                </Stack.Navigator>
            </NavigationContainer>
        );
    } else {
        return (
            <View>
                <StatusBarCompo/>
                <HomePage/>
            </View>
        );
    }
}

function StatusBarCompo() {
    return <View style={{height: STATUS_BAR_HEIGHT, backgroundColor: "#5E8D48"}}>
        <StatusBar
            animated={true}
            backgroundColor="white"
            barStyle={'dark-content'}
            translucent={true}
        />
    </View>;
}

