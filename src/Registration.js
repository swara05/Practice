import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { firebase } from '../config';

const Registration = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    registerUser = async(email,password,firstName,lastName) => {
        await firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(() => {
            firebase.auth().currentUser.sendEmailVerification({
                handleCodeInApp: true,
                url:'https://prac2-2b2b9.firebaseapp.com',

            })
            .then(() => {
                alert('Verification email sent')
            }).catch((error) => {
                alert(error.message)
            })
            .then(() => {
                firebase.firestore().collection('users')
                .doc(firebase.auth().currentUser.uid)
                .set({
                    firstName,
                    lastName,
                    email,
                })
            })
            .catch((error) => {
                alert(error.message)
            })
        })
    }
  return (
    <View>
      <Text>Register Here!</Text>
      <TextInput 
        placeholder='first name'
        onChangeText={(fname) => setFirstName(fname)}
        autoCorrect={false}
      />
      <TextInput 
        placeholder='last name'
        onChangeText={(lname) => setLastName(lname)}
        autoCorrect={false}
      />
      <TextInput 
        placeholder='email'
        onChangeText={(email) => setEmail(email)}
        autoCorrect={false}
        autoCapitalize='none'
        keyboardType='email-address'
      />
      
      <TextInput 
        placeholder='password'
        onChangeText={(passw) => setPassword(passw)}
        autoCorrect={false}
        autoCapitalize='none'
        secureTextEntry={true}
      />

      <TouchableOpacity onPress={() => registerUser(email,password,firstName,lastName)}>
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Registration

const styles = StyleSheet.create({})