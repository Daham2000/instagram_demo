import {Appbar, Divider} from "react-native-paper";
import React from 'react';
import {homeStyle} from "../../styles/home_style";
import {FlatList, Image, Text, View, StyleSheet, TouchableOpacity} from "react-native";
import loginStyle from "../../styles/style";
import {Icon} from "react-native-elements";
import {DividerMod} from "./basic_component";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomePage from "../home_page/home_page";

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

export function StoryList(props) {
    const renderItem = ({item}) => (
        <Item title={item.name} image={item.image}/>
    );

    return <View>
        <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={props.data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
        <Divider style={{
            borderBottomColor: 'black',
            borderBottomWidth: 0.19,
            marginTop: 10,
            marginHorizontal: 10,
        }}/>
    </View>;
}

const Item = ({title, image}) => (
    <View style={styles.item}>
        <View style={homeStyle.story}>
            <Image style={homeStyle.storyImage} source={{uri: image}}/>
        </View>
        <Text style={styles.title}>{title}</Text>
    </View>
);

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        paddingStart: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: "column",
        marginVertical: 2,
        marginHorizontal: 6,
    },
    title: {
        fontSize: 12,
    },
});

export function PostList(props) {
    const renderItem = ({item}) => (
        <Post title={item.name} image={item.image} mainImage={item.post} des={item.description}/>
    );

    return <View>
        <FlatList
            showsHorizontalScrollIndicator={false}
            data={props.data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
        <DividerMod/>
    </View>;
}

const Post = ({title, image, mainImage, des}) => (
    <View style={homeStyle.postMainView}>
        <View style={homeStyle.postMainTopView}>
            <View style={homeStyle.postTopView}>
                <Image style={homeStyle.postImage} source={{uri: image}}/>
                <Text style={homeStyle.postTitle}>{title}</Text>
                <Text> > </Text>
                <TouchableOpacity>
                    <Text style={homeStyle.followTextStyle}> Follow </Text>
                </TouchableOpacity>
            </View>
            <Image resizeMode="contain" style={homeStyle.postMoreIcon} source={require('../../../assets/more.png')}/>
        </View>
        <View>
            <Image style={homeStyle.postMainImage} source={{uri: mainImage}}/>
        </View>
        <View style={homeStyle.postMainBottomView}>
            <View style={homeStyle.postBottomLeftSide}>
                <Image resizeMode="contain"
                       style={homeStyle.postBottomIcon} source={require('../../../assets/like.png')}/>
                <Image resizeMode="contain"
                       style={homeStyle.postBottomIcon} source={require('../../../assets/comment.png')}/>
                <Image resizeMode="contain"
                       style={homeStyle.postBottomIcon} source={require('../../../assets/share.png')}/>
            </View>
            <Image resizeMode="contain"
                   style={homeStyle.postBottomIcon} source={require('../../../assets/save.png')}/>
        </View>
        <Text style={homeStyle.postDescriptionStyle}>
            {des}
        </Text>
        <DividerMod/>
    </View>
)