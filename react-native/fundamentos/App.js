import 'react-native-gesture-handler';
import { PaperProvider } from 'react-native-paper';
import Routes from './src/router/Routes';

export default function App() {
  return (
    <PaperProvider>
      <Routes />
    </PaperProvider>
  );
}
