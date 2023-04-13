import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Link, useLocation } from 'react-router-native'

export default function ({children, to}) {

  const {pathname} = useLocation();
  const active = pathname == to;
  


  return (
    <Link underlayColor={'transparent'} to={to} >
        <Text style={ active ? styles.active : styles.appbar_menutext}>{children}</Text>
    </Link>
  )
}


const styles = StyleSheet.create({
  appbar_menutext:{
    color: '#B8BBC6',
    marginHorizontal: 10,
    marginVertical:5
  },
  active: {
    color: '#FFFFFF',
    marginHorizontal: 10,
    marginVertical:5,
    fontWeight: 'bold'
  }
})