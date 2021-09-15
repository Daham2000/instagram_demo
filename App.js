import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import Login from "./src/view/login_page";
import SignUp from "./src/view/sign_up_page";
import auth from '@react-native-firebase/auth';
import {ActivityIndicator} from "react-native";
import HomePage from "./src/view/home_page";

const Stack = createNativeStackNavigator();

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
                <Stack.Navigator screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen name="Login" component={Login}/>
                    <Stack.Screen name="SignUp" component={SignUp}/>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
    else{
        return (
            <HomePage/>
        );
    }
}
