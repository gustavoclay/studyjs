import { createDrawerNavigator } from '@react-navigation/drawer';
import StackRoutes from './stack.routes';
import TabRoutes from './tab.routes';

import Form from '../screens/Form/Form';
import ListaPessoas from '../screens/Pessoa/ListaPessoas';
import Cadastro from '../screens/Cadastro/Cadastro';

const Drawer = createDrawerNavigator()


export default function DrawerRoutes() {
  return (
    <Drawer.Navigator initialRouteName='Cadastro'>

      <Drawer.Screen name="Pessoas" component={StackRoutes} />

      <Drawer.Screen name="Profile" component={StackRoutes} />

      <Drawer.Screen name="Form" component={Form} />

      <Drawer.Screen name="Tab" component={TabRoutes} />

      <Drawer.Screen name="Cadastro" component={Cadastro} />

    </Drawer.Navigator>
  )
}

