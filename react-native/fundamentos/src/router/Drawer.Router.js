import { createDrawerNavigator } from '@react-navigation/drawer';
import Configurations from '../screens/Configurations/Configurations';
import TabRoutes from './Tab.Routes';

const Drawer = createDrawerNavigator()


export default function DrawerRoutes() {
  return (
    <Drawer.Navigator>

      <Drawer.Screen name="Home" component={TabRoutes} />

      <Drawer.Screen name="Configurations" component={Configurations} />

    </Drawer.Navigator>
  )
}

