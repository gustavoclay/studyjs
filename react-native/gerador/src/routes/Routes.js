import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Home from '../screens/home/Home'
import Passwords from '../screens/passwords/Passwords'

import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

export default function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <Ionicons name="home" size={size} color='#071952' />
            }
            return <Ionicons name="home-outline" size={size} color={color} />
          }
        }} />
      <Tab.Screen
        name="Passwords"
        component={Passwords}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <Ionicons name="lock-closed" size={size} color='#071952' />
            }
            return <Ionicons name="lock-closed-outline" size={size} color={color} />
          }
        }} />
    </Tab.Navigator>
  )
}

