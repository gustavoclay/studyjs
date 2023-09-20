import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import Home from './src/screens/home/home';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Home />
    </PaperProvider>
  );
}
