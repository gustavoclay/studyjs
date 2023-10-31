import { createStackNavigator } from '@react-navigation/stack';
import Configurations from '../screens/Configurations/Configurations';

import FormPessoa from '../screens/Pessoa/FormPessoa';
import ListaPessoas from '../screens/Pessoa/ListaPessoas';
import FormPessoaStorage from '../screens/PessoaStorage/FormPessoaStorage';
import ListaPessoasStorage from '../screens/PessoaStorage/ListaPessoasStorage';
import Profile from '../screens/Profile/Profile';

const Stack = createStackNavigator()


export default function StackRoutes() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>

      <Stack.Screen name="Home" component={ListaPessoasStorage} />

      <Stack.Screen name="FormPessoaStorage" component={FormPessoaStorage} />

      <Stack.Screen name="ListaPessoas" component={ListaPessoas} />

      <Stack.Screen name="FormPessoa" component={FormPessoa} />

      <Stack.Screen name="Configurations" component={Configurations} />

      <Stack.Screen name="Profile" component={Profile} />

    </Stack.Navigator>
  )
}

