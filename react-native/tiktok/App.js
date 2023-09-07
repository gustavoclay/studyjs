
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import Routes from './src/routes/Routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={"transparent"}
        barStyle={"light-content"}
        translucent={true}
      />
      <Routes />
    </NavigationContainer>

  );
}
