import React from 'react'
import { Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigate, useLocation } from 'react-router-native'

export default function Tab({to, icon, title, edit, image}) {

    const {pathname} = useLocation();
    const ng = useNavigate();

    const active = pathname === to;

  return (
    <View style={styles.tab_item_container}>
        <TouchableOpacity style={styles.tab_touchable} onPress={() => ng(to)}>
            {
                edit ?
                    <Image style={styles.tab_image} source={{uri: `${process.env.API_LOCAL}/images/${image}`}}></Image>
                :
                <>
                    <Icon name={icon} color={active ? '#1877F2' : 'white'} size={20}></Icon>
                    <Text style={active ? styles.active : styles.tab_color}>{title}</Text>
                </>
            }
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    tab_item_container:{
        padding: 15,
        justifyContent: 'center'
    },
    tab_touchable:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tab_image: {
        width:35,
        height:35,
        borderRadius: 20,
    },
    tab_color: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'center'
    },
    active:{
        color: '#1877F2'
    }
})
