import React from 'react'
import { FlatList, View, Text } from 'react-native'
import GetAllPosts from '../../../hooks/GetAllPosts'
import Post from './Post';

export default function PostList() {

  const { allPost } = GetAllPosts();

  return (
      <FlatList
        data={allPost}
        ItemSeparatorComponent={() => <View></View>}
        renderItem={({item: post}) => (
         <Post {...post}></Post>
        )}
      ></FlatList>
  )
}
