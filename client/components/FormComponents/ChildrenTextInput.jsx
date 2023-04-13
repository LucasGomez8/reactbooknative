import React from 'react'
import { TextInput, View } from 'react-native'

export default function ChildrenTextInput({...props}) {
  return (
   <View>
        <TextInput {...props}></TextInput>
   </View>
  )
}
