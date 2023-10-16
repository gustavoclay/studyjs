import { createStackNavigator } from '@react-navigation/stack';
import Configurations from '../screens/Configurations/Configurations';

import Profile from '../screens/Profile/Profile';

const Stack = createStackNavigator()


export default function StackRoutes() {
  return (
    <Stack.Navigator>

      <Stack.Screen name="Home" component={Profile} />

      <Stack.Screen name="Configurations" component={Configurations} />

    </Stack.Navigator>
  )
}

