import 'react-native-gesture-handler';
import { PaperProvider } from 'react-native-paper';
import Routes from './src/routes/routes';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <PaperProvider>
      <Routes />
      <Toast />
    </PaperProvider>
  );
}
