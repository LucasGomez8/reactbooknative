import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function PostInput() {
  return (
    <View style={styles.postInput_container}>
        <Text style={styles.postinput_text}>Write a message...</Text>
        <TextInput style={styles.postinput_deliner} placeholder="Post..." placeholderTextColor="#fff"></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
    postInput_container: {
        backgroundColor: '#313131',
        paddingVertical: 30,
        paddingLeft: 20
    },
    postinput_text:{
        color: '#fff',
        marginLeft: 15,

    },
    postinput_deliner:{
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 15,
        width: 340,
        padding: 3
    }
})