import { Formik } from 'formik'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import FormikTextInput from "../components/FormComponents/FormikTextInput"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useUserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-native'

const initialValues = {
  email: "",
  password: ""
}

export default function Login() {

  const {checkLogin} = useUserContext();
  const navigate = useNavigate();

  return (
    <View style={styles.container}>
            <View style={styles.header_contain}>
        <Text style={styles.header_text1}>Good to see you</Text>
        <Text style={styles.header_text2}>Again!</Text>
      </View>
        <Formik onSubmit={
          async(values) => {
            if(await checkLogin(values)){
            navigate("/");
            }
          }}
          initialValues={initialValues}>
          {
            ({handleChange, handleSubmit, handleBlur, values}) => {
              return(
                <KeyboardAwareScrollView>
                  <View style={styles.form_container}>
                        <View style={styles.form_body}>
                          <Text style={styles.form_header}>Log in</Text>
                          <FormikTextInput labelname="Email" name="email"></FormikTextInput>
                          <FormikTextInput secureTextEntry={true} labelname="Password" name="password"></FormikTextInput>
                          <Pressable onPress={handleSubmit}>
                            <Text style={styles.form_pressableregister}>Log In</Text>
                          </Pressable>
                        </View>
                  </View>
                </KeyboardAwareScrollView>
              )         
            }
          }
        </Formik>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 60
    },
    header_contain: {
      marginTop: -30,
      marginBottom: 60
    },
    header_text1:{
      color: '#fff',
      fontSize: 45,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    header_text2 : {
      color: '#1877F2',
      fontSize: 35,
      textAlign: 'center',
      fontWeight: '100'
    },
    form_header: {
      fontSize: 25,
      textAlign: 'center',
      fontWeight: 100
    },
    form_container: {
      justifyContent: 'center',
      alignItems: 'center',
  
    },
    form_body: {
      backgroundColor: '#FFFF',
      padding: 20,
      width: 350,
      borderRadius: 10,
    },
    form_pressableregister: {
      backgroundColor: '#1877F2',
      color: '#fff',
      paddingVertical: 18,
      paddingHorizontal: 45,
      marginTop: 15,
      borderRadius: 10,
      textAlign: 'center',
      alignSelf: 'center',
      marginHorizontal: 'auto',
      fontWeight: 'bold',
    },
})