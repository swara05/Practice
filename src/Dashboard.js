import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { firebase } from '../config'

const Dashboard = () => {

    const [name, setName] = useState(second)

    useEffect(() => {
      firebase.firestore().collection('users')
      .doc(firebase.auth().currentUser.uid).get()
      .then((snapshot) => {
        if(snapshot.exists){
            setName(snapshot.data())
        }
        else{
            console.log('User not exists')
        }
      })
    }, [])
    
  return (
    <View>
      <Text>Welcom , {name.firstName} </Text>
      <TouchableOpacity onPress={() => firebase.auth().signOut()}>
            <Text>Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({})