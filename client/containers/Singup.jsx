import { Formik } from 'formik'
import React from 'react'
import { KeyboardAvoidingView, Pressable, ScrollView, Text, View } from 'react-native'
import FormikTextInput from '../components/FormComponents/FormikTextInput'
import { StyleSheet } from 'react-native'
import { Link } from 'react-router-native'
import { SafeAreaView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const initialValues = {
  name:'',
  lastname:'',
  email:'',
  password:''
}

export default function Singup() {
  return (
    <SafeAreaView style={styles.container}>
    <View >
      <View style={styles.header_contain}>
        <Text style={styles.header_text1}>Connect With</Text>
        <Text style={styles.header_text2}>Your Friends</Text>
      </View>
      <Formik initialValues={initialValues}>
        {
          () => {
            return (
              <KeyboardAwareScrollView>
              <View style={styles.form_container}>
                <View style={styles.form_body}>
                  <Text style={styles.form_header}>Sign Up</Text>
                  <FormikTextInput labelname="Name" name="name"></FormikTextInput>
                  <FormikTextInput labelname="Lastname" name="lastname"></FormikTextInput>
                  <FormikTextInput labelname="Email" name="email"></FormikTextInput>
                  <FormikTextInput labelname="Password" name="password"></FormikTextInput>
                  <Pressable>
                    <Text style={styles.form_pressableregister}>Let's do it!</Text>
                  </Pressable>
                  <Link underlayColor={"transparent"} to="/login">
                    <Text style={styles.alreadyhaveanaccount}>But... I Already have an account</Text>
                  </Link>
                </View>
              </View>
              </KeyboardAwareScrollView>
            )
          }
        }
      </Formik>
    </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100
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
  alreadyhaveanaccount: {
    backgroundColor: '#B8BBC6',
    color: '#fff',
    alignSelf: 'center',
    marginTop: 10,
    padding: 10,
    borderRadius: 10
  }
})