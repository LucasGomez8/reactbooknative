import React from 'react'
import { Text, View } from 'react-native'
import MyDataEffect from '../../hooks/MyDataEffect';
import FollowList from '../components/FollowUsersComponents/FollowList';

export default function FollowUsers() {

  const {profileData} = MyDataEffect();
  return (
    <View>
      <FollowList id={profileData.user_id}></FollowList>
    </View>
  )
}
