import React from 'react'
import { StyleSheet } from 'react-native'
import { Image, Text, View } from 'react-native'

export default function ProfileHeader({name, lastname, img, port, numofposts}) {
  return (
    <View style={styles.pheader_container}>
        <Image style={styles.pheader_port} source={{uri: `${process.env.API_LOCAL}/images/ports/${port}`}}></Image>
        <View style={styles.pheader_content}>
            <Image style={styles.pheader_photo} source={{uri: `${process.env.API_LOCAL}/images/${img}`}}></Image>
            <View style={styles.pheader_text_content}>
                <View style={styles.pheader_text_info}>
                    <Text style={styles.pheader_text}>{name}</Text>
                    <Text style={styles.pheader_text}>{lastname}</Text>
                </View>
                <View style={styles.pheader_text_stadistics}>
                    <View style={styles.pheader_text_stadistics_column}>
                        <Text style={styles.pheader_stadistics_text}>Posts</Text>
                        <Text style={styles.pheader_stadistics_text}>{numofposts}</Text>
                    </View>
                </View>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    pheader_container: {
        backgroundColor: '#313131',
    },
    pheader_port: {
        height: 150
    },
    pheader_content: {
        flexDirection: 'row',
        marginTop: 20
    },
    pheader_photo: {
        height: 80,
        width: 80,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#fff',
        position: 'relative',
        top: -40,
        marginLeft: 20
    },
    pheader_text_content:{
        marginLeft: 20,
        flexDirection: 'column',

    },
    pheader_text_info:{
        flexDirection: 'row'
    },
    pheader_text_stadistics:{
      flexDirection: 'column',  
    },
    pheader_text_stadistics_column:{
        flexDirection: 'column',
        marginTop: 20
    },
    pheader_text: {
        color: '#fff',
        marginLeft: 20,
        fontSize: 18,
        paddingBottom:0
    },
    pheader_stadistics_text:{
        color: '#fff',
        marginLeft: 20,
        fontSize: 15,
        paddingBottom:0,
    },
})