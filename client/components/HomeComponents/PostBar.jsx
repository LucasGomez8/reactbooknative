import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { View } from 'react-native'

export default function PostBar() {
  return (
    <View style={styles.postbar_container}>
        <View style={styles.postbar_content}>
            <TextInput placeholderTextColor={'white'} style={styles.postbar_input} placeholder="Create a post..."></TextInput>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    postbar_container: {
    },
    postbar_content: {
        backgroundColor: '#313131',
        paddingVertical: 20,
        paddingHorizontal: 50,
    },
    postbar_input: {
        borderColor: '#ffff',
        borderWidth: 1,
        paddingHorizontal: 50,
        paddingVertical: 5,
        borderRadius: 50,
        color: '#fff'
    }
})