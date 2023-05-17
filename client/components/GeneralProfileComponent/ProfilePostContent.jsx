import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function ProfilePostContent(props) {

  const parseThousands = (nm) => {
    return nm > 1000 ? (nm / 1000) + 'k' : nm
  }
  
  return (
    <View style={styles.content_container}>
      <Text style={styles.text_content}>{props.content}</Text>
      <Text style={styles.color_likes}>{parseThousands(props.likes)}</Text>
      <Icon name='heart' color='#fff'/>
    </View>
  )
}

const styles = StyleSheet.create({
  content_container:{
    marginTop: 10,
    marginLeft: 30
  },
  text_content: {
    color: '#fff',
    fontSize: 15
  },
  color_likes:{
    color: '#fff',
    fontSize: 12 
  }
})