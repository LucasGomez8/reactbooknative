import { View, Text, FlatList } from 'react-native'
import React from 'react'
import GetAllPosts from '../../../hooks/GetAllPosts'
import ProfilePost from './ProfilePost';

export default function ProfilePostList({id}) {

    const { allPost} = GetAllPosts(id);

  return (
    <FlatList
    data={allPost}
    ItemSeparatorComponent={() => <View></View>}
    renderItem={({item: post}) => (
     <ProfilePost {...post}></ProfilePost>
    )}
    ></FlatList>
  )
}