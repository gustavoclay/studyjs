import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home/Home";
import Inbox from "../screens/inbox/Inbox";
import New from "../screens/new/New";
import Profile from "../screens/profile/Profile";
import Search from "../screens/search/Search";

import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#000",
          borderTopWidth: 0
        },
        tabBarActiveTintColor: "#fff",
      }}
    >

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <Ionicons name="home" size={size} color={color} />
            }
            return <Ionicons name="home-outline" size={size} color={color} />
          }
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <Ionicons name="search" size={size} color={color} />
            }
            return <Ionicons name="search-outline" size={size} color={color} />
          }
        }}
      />

      <Tab.Screen
        name="New"
        component={New}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <Ionicons name="add" size={size} color={color} />
            }
            return <Ionicons name="add-outline" size={size} color={color} />
          }
        }}
      />

      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <Ionicons name="chatbox-ellipses" size={size} color={color} />
            }
            return <Ionicons name="chatbox-ellipses-outline" size={size} color={color} />
          }
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <Ionicons name="person" size={size} color={color} />
            }
            return <Ionicons name="person-outline" size={size} color={color} />
          }
        }}
      />


    </Tab.Navigator>

  )
}
