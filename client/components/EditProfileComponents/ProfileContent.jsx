import { View, Text } from 'react-native'
import React from 'react'
import ProfileItem from '../GeneralProfileComponent/ProfileItem'

export default function ProfileContent() {
  return (
    <View>
      <ProfileItem itemType='input'></ProfileItem>
      <ProfileItem itemType='post'></ProfileItem>
    </View>
  )
}