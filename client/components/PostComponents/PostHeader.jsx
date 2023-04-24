import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { API_LOCAL } from '@env'

export default function PostHeader(props) {


    return (
        <View style={style.header_container}>
            <Image style={style.image_header} source={{uri: `${API_LOCAL}/images/${props.user_image_photo}`}}></Image>
            <Text style={style.text_header}>{props.user_firstname + ' ' + props.user_lastname}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    text_header: {
        color: '#fff',
        fontSize: 17,
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 20,
    },
    image_header:{
        width: 50,
        height: 50,
        borderRadius: 50
    },
    header_container: {
        flexDirection: 'row',
        marginLeft: 30,
        paddingTop: 10
    }
})
