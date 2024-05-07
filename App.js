import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { firebase } from './config';
import Login from './src/Login';
import Header from './src/Header';
import Registration from './src/Registration';
import Dashboard from './src/Dashboard';

const Stack = createStackNavigator();

const App = () => {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscribe = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscribe;
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          component={Login}
          options={{
            headerTitle: () => <Header name='Bug Ninza' />,
            headerStyle: {
              height: 150,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              backgroundColor: '#00e4d0',
              shadowColor: '#000',
              elevation: 25,
            }
          }}
        />

        <Stack.Screen
          name='Registration'
          component={Registration}
          options={{
            headerTitle: () => <Header name='Bug Ninza' />,
            headerStyle: {
              height: 150,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              backgroundColor: '#00e4d0',
              shadowColor: '#000',
              elevation: 25,
            }
          }}
        />

      </Stack.Navigator>
    )
  }

  return(
    <Stack.Navigator>
      <Stack.Screen
          name='Dashboard'
          component={Dashboard}
          options={{
            headerTitle: () => <Header name='Dashboard' />,
            headerStyle: {
              height: 150,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              backgroundColor: '#00e4d0',
              shadowColor: '#000',
              elevation: 25,
            }
          }}
        />
    </Stack.Navigator>
  )
}

export default () => {
  return(
    <NavigationContainer>
      <App/>
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({})