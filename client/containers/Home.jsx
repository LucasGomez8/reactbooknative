import React from 'react'
import { Text, View } from 'react-native'
import PostBar from '../components/HomeComponents/PostBar'
import PostList from '../components/HomeComponents/PostList'
import { StyleSheet } from 'react-native'

export default function Home() {
  return (
    <View style={style.home_container}>
        <PostList typeOfPost="home"></PostList>
    </View>
  )
}

const style = StyleSheet.create({
  home_container:{
    flexShrink: 1
  }
})
