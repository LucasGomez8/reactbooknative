import { View, Text } from 'react-native'
import React from 'react'
import ProfilePostContent from './ProfilePostContent'

export default function ProfilePost({post_content, post_likes}) {
  return (
    <View>
      <ProfilePostContent content={post_content} likes={post_likes}></ProfilePostContent>
    </View>
  )
}