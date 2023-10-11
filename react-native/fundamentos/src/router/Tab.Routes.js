import IonIcon from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Posts from '../screens/Posts/Posts';
import Products from '../screens/Products/Products';
import Users from '../screens/Users/Users';

const Tab = createBottomTabNavigator()

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>

      <Tab.Screen name="Products" component={Products} options={{
        tabBarIcon: ({ color, size }) => {
          return <IonIcon name="cart-outline" size={size} color={color} />
        }
      }} />

      <Tab.Screen name="Posts" component={Posts} options={{
        tabBarIcon: ({ color, size }) => {
          return <IonIcon name="newspaper-outline" size={size} color={color} />
        }
      }} />

      <Tab.Screen name="Users" component={Users} options={{
        tabBarIcon: ({ color, size }) => {
          return <IonIcon name="people-outline" size={size} color={color} />
        }
      }} />

    </Tab.Navigator>
  )
}

