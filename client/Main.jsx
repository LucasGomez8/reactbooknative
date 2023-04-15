import React from 'react'
import { Route, Routes } from 'react-router-native'
import { View, StyleSheet } from 'react-native'
import Welcome from './components/Welcome'
import AppBar from './components/AppBar'
import Login from './containers/Login'
import Singup from './containers/Singup'
import { UserContextProvider } from './context/UserContext'

export default function Main() {
  return (
    <View style={style.container}>
      <UserContextProvider>
      <AppBar></AppBar>
        <Routes>
         <Route path="/" element={<Welcome></Welcome>}></Route>
         <Route path="/login" element={<Login></Login>}></Route>
         <Route path="/singup" element={<Singup></Singup>}></Route>
        </Routes>
      </UserContextProvider>
    </View>
  )
}

const style = StyleSheet.create({
    container:{
      backgroundColor: '#18191A',
      flex: 1
    },
  });