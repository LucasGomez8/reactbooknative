import React, { useEffect, useState } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { useUserContext } from '../context/UserContext'
import Tab from './TabBarComponents/Tab'


export default function TabBar() {


  const { userLogin_data } = useUserContext();
  const [userData, setUserData] = useState({
    img: "",
    name: "",
  });

  useEffect(() => {
    if( userLogin_data && userLogin_data.length > 0) {
    setUserData( prev => ({ 
      ...prev,
      img: userLogin_data[0].user_image_photo,
      name: userLogin_data[0].user_firstname
    }));
  }
  }, [userLogin_data])

  return (
    <>

    <View style={style.tab_container}>  
      <Tab to="/" icon="home" title="Home"></Tab>
      <Tab to="/follow" icon="users" title="Follow people"></Tab>
      <Tab to="/editprofile" edit={true} image={userData.img}></Tab>
    </View>
    </>
  )
}

const style = StyleSheet.create({
  tab_container: {
    flexDirection: "row",
    backgroundColor: '#242526',
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "space-around",
  },

})
