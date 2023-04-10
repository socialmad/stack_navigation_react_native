import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Stack = createStackNavigator();

function Login({navigation}:any){
  const onLinkClick = () => {
   navigation.navigate('Register');
  }
  return (
  <View style={styles.container}>
    <TouchableOpacity onPress={onLinkClick} style={styles.buttonStyle}>
      <Text style={styles.textStyle}>
        Register
      </Text>
    </TouchableOpacity>
  </View>
  )
}


function Register({navigation} : any) {
  const onLinkClick = () => {
    navigation.goBack();
  }
  return (
  <View style={styles.container}>
   <TouchableOpacity onPress={onLinkClick} style={styles.buttonStyle}>
      <Text style={styles.textStyle}>
        Login
      </Text>
    </TouchableOpacity>
  </View>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen
          name='Login'
          component={Login}
       />
       <Stack.Screen
          name='Register'
          component={Register}
       />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonStyle: {
    padding: 10,
    backgroundColor: 'lightgreen',
    borderRadius: 4,
    width: '50%',
    alignSelf: 'center'
  },
  textStyle: {
    fontWeight: 'bold'
  }
})