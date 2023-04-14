import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Link } from 'react-router-native'
import { useUserContext } from '../context/UserContext'
import Home from '../containers/Home';

export default function Welcome() {

    const {isLogin} = useUserContext();


    if(!isLogin) {
        return (
            <View style={styles.welcome_container}>
                <View style={styles.welcome_titleheader}>
                    <Text style={styles.welcome_titleheadertext1}>Welcome to</Text>
                    <Text style={styles.welcome_titleheadertext2}>ReactBook</Text>
                </View>
                <View style={styles.welcome_eventcontainer}>
                    <Text style={styles.welcome_event_text}>Are you not register yet?</Text>
                    <Link to="/singup">
                            <Text style={styles.welcome_event_pressable}>Register</Text>
                    </Link>
                </View>
            </View>
        )
    }
    else{
        <Home></Home>
    }

}

const styles = StyleSheet.create({
    welcome_container:{
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1
    },
    welcome_titleheader: {
        
    },
    welcome_titleheadertext1:{
        fontSize: 60,
        color: '#fff',
        fontWeight: 'bold'
    },
    welcome_titleheadertext2:{
        fontSize: 50,
        color: '#1877F2',
        fontWeight: '200',
        textAlign: 'center'
    },
    welcome_eventcontainer: {
        borderColor: '#1877F2',
        borderWidth: 2,
        padding: 35,
        marginTop: 100,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcome_event_text:{
        color: '#B8BBC6',
        marginBottom: 20,
        fontSize: 18
    },
    welcome_event_pressable: {
        backgroundColor: '#1877F2',
        paddingHorizontal: 50,
        paddingVertical: 15,
        borderRadius: 10,
        textAlign: 'center',
        color: 'white',
    },
    welcome_event_pressable_text: {

    }
})