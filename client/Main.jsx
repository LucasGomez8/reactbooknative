import React from 'react'
import { Route, Routes } from 'react-router-native'
import { View, StyleSheet } from 'react-native'
import Welcome from './components/Welcome'
import AppBar from './components/AppBar'
import Login from './containers/Login'
import Singup from './containers/Singup'
import EditProfile from './containers/EditProfile'
import FollowUsers from './containers/FollowUsers'
import TabBar from './components/TabBar'
import { useUserContext } from './context/UserContext'

export default function Main() {

  const {isLogin} = useUserContext();

  return (
    <View style={style.container}>
      <AppBar></AppBar>
        <Routes>
         <Route path="/" element={<Welcome></Welcome>}></Route>
         <Route path="/login" element={<Login></Login>}></Route>
         <Route path="/singup" element={<Singup></Singup>}></Route>
         <Route path="/follow" element={<FollowUsers/>}></Route>
         <Route path="/editprofile" element={<EditProfile></EditProfile>}></Route>
        </Routes>
        {
          isLogin ?
          <TabBar></TabBar>
          :
          <></>
        }
    </View>
  )
}

const style = StyleSheet.create({
    container:{
      backgroundColor: '#18191A',
      flex: 1
    },
  });