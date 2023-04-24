import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import Constants from "expo-constants"
import AppbarTab from './AppbarComponents/AppbarTab'
import { Link } from 'react-router-native'
import { useUserContext } from '../context/UserContext'

export default function AppBar() {
    const { isLogin } = useUserContext();
    
    if(!isLogin){
        return (
        <View style={style.appbar_container}>
            <View>
                <Link to="/" underlayColor={"transparent"}>
                    <Text style={style.appbar_logotext}>ReactBook</Text>
                </Link>
            </View>
            <View style={style.appbar_menu}>
                <AppbarTab to="/login">Log In</AppbarTab>
                <AppbarTab to="/singup">Sign Up</AppbarTab>
            </View>
        </View>
        )
    }
    else{
        return(
            <View style={style.appbar_container}>
            <Link to="/" underlayColor={"transparent"}>
                <Text style={style.appbar_logotext}>ReactBook</Text>
            </Link>
        </View>
        )

    }
    

}

const style=StyleSheet.create({
    appbar_container: {
        backgroundColor: '#242526',
        paddingTop: Constants.statusBarHeight,
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    appbar_logotext:{
        fontSize: 20,
        color: '#1877F2',
        fontWeight: 'bold',
    },
    appbar_menu:{
        flexDirection:'row',
        justifyContent: 'space-around'
    },

})