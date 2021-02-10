import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/home'
import About from '../screens/about'
import ReviewDetail from '../screens/reviewDetail'
import { Ionicons } from '@expo/vector-icons'

const Stack = createStackNavigator()

export const HomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          title: 'GAME ZONE',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <Ionicons name='menu' size={28} onPress={() => navigation.openDrawer()} />
          ),
          headerLeftContainerStyle: {
            paddingStart: 8
          },
          headerStyle: {
            backgroundColor: '#888'
          },
          headerTitleStyle: {
            color: '#fff'
          }
        }}
      />
      <Stack.Screen name='About' component={About} />
      <Stack.Screen name='ReviewDetail' component={ReviewDetail} />
    </Stack.Navigator>
  )
}
