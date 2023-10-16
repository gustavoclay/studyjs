import { createDrawerNavigator } from '@react-navigation/drawer';
import StackRoutes from './stack.routes';
import TabRoutes from './tab.routes';

import Form from '../screens/Form/Form';

const Drawer = createDrawerNavigator()


export default function DrawerRoutes() {
  return (
    <Drawer.Navigator>

      <Drawer.Screen name="Home" component={TabRoutes} />

      <Drawer.Screen name="Profile" component={StackRoutes} />

      <Drawer.Screen name="Form" component={Form} />

    </Drawer.Navigator>
  )
}

