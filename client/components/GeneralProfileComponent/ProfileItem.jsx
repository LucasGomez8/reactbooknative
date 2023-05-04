import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import PostInput from '../PostComponents/PostInput'
import ProfilePostList from './ProfilePostList'

export default function ProfileItem({itemType, id}) {
    switch (itemType) {
        case 'input':
            return(
                <View style={styles.delimiter}>
                    <PostInput></PostInput>
                </View>
            )
        case 'post':
            return(
                <View style={styles.delimiter}>
                    <View style={styles.publications_container}>
                        <Text style={styles.publication_text}>Publications:</Text>
                        <ProfilePostList id={id}></ProfilePostList>
                    </View>
                </View>
            )
    }
}

const styles = StyleSheet.create({
    delimiter: {
        marginVertical: 20,
    },
    publications_container:{
        backgroundColor: '#313131',
        padding: 15,
    },
    publication_text:{
        color: '#fff',
        fontSize: 20,
        marginLeft: 15,
    }
})