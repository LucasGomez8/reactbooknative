import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import PostInput from '../PostComponents/PostInput'

export default function ProfileItem({itemType}) {
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
                    
                </View>
            )
    }
}

const styles = StyleSheet.create({
    delimiter: {
        marginVertical: 20,
    }
})