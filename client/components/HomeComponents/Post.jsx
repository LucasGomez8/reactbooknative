import React from 'react'
import { View, Text } from 'react-native'
import PostHeader from '../PostComponents/PostHeader'
import PostContent from '../PostComponents/PostContent'
import { StyleSheet } from 'react-native'

export default function Post({user_firstname, user_lastname, post_content, post_likes, user_image_photo}) {
  return (
    <View style={styles.post_container}>
      <PostHeader user_firstname={user_firstname} user_lastname={user_lastname} user_image_photo={user_image_photo}></PostHeader>
      <PostContent post_content={post_content} post_likes={post_likes}></PostContent>
    </View>
  )
}

const styles = StyleSheet.create({
  post_container: {
    backgroundColor: '#313131',
    marginBottom: 20,
    padding: 10
  }
})
