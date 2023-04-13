import React from 'react'
import ChildrenTextInput from './ChildrenTextInput'
import { useField } from 'formik';
import { StyleSheet, Text } from 'react-native';

export default function FormikTextInput({labelname, name, ...props}) {
    const [field, meta, helpers] = useField(name);
    const sError = meta.touched && meta.error;

  return (
    <>
    <Text style={styles.label}>{labelname}</Text>
    <ChildrenTextInput
    onChangeText={value => helpers.setValue(value)}
    onBlur={() => helpers.setTouched(true)}
    value={field.value}
    error={sError}
    {...props}
    style={styles.textinput}
    >
    </ChildrenTextInput>
</>
  )
}

const styles = StyleSheet.create({
    textinput:{
      borderStyle: 'solid',
      borderWidth: 1,
      color: "#000",
      borderColor: '#ccc',
      borderRadius: 7,
      marginBottom: 20,
      padding: 10,
      alignSelf: 'stretch'
    },
    label: {
        color: '#B8BBC6',
        fontSize: 14,
        marginBottom: 5
    }
  })
