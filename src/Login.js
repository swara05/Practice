import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { firebase } from '../config';

const Login = () => {

    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');

    loginUser = async (email, password) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <View>
            <Text>Login</Text>
            <TextInput 
                placeholder='email'
                onChangeText={(txt) => setEmail(txt)} 
                autoCapitalize='none' 
                autoCorrect={false} 
            />
            <TextInput 
                placeholder='password'
                onChangeText={(pass) => setPassword(pass)} 
                autoCapitalize='none' 
                autoCorrect={false} 
                secureTextEntry={true} 
            />
            <TouchableOpacity onPress={() => loginUser(email,password)}>
                <Text>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
                <Text>Don't have an account?Register Now</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({})