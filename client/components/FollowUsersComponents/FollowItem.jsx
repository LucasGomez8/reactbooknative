import { View, Text } from 'react-native'
import React from 'react'

export default function FollowItem(props) {
    console.log(props)
  return (
    <View>
      <Text>{props.user_firstname}</Text>
    </View>
  )
}