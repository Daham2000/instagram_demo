import {StyleSheet} from "react-native";

const height_proportion = '100%';


export const homeStyle = StyleSheet.create({
    appbar: {
        position: 'absolute',
        flexDirection: "row",
        left: 0,
        right: 0,
        top: 0,
        backgroundColor:"white",
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    imageView:{
        flexDirection: "row",
        padding: 20,
        flex: 0.4,
    },
    imageLogo: {
        flex: 0.25,
        resizeMode: 'contain'
    },
    rightView:{
        flexDirection: "row",
        height:height_proportion,
        paddingRight: 10,
        flex: 0.17,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    appbarIcon: {
        flex:0.35,
    },
});