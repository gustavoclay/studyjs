import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import DrawerRoutes from './Drawer.Router'

export default function Routes() {
  return (
    <NavigationContainer>
      <DrawerRoutes />
    </NavigationContainer>
  )
}
