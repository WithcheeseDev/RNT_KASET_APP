import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer'
import { HomeStack } from './homestack'

const Drawer = createDrawerNavigator()

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ width: '100%', height: 80, backgroundColor: '#000' }} />
      <DrawerItem label='Help' onPress={() => alert('Link to help')} />
    </DrawerContentScrollView>
  )
}

export const HomeDrawer = ({ navigation, route }) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent />}>
        <Drawer.Screen name='Home' component={HomeStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
