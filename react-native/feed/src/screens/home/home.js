import { FlatList, StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import pessoas from '../../services/pessoas.json';
import Pessoa from './components/Pessoa';

export default function Home() {

  const theme = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.cardPessoas}>

        <FlatList showsHorizontalScrollIndicator={false} data={pessoas} renderItem={({ item }) => <Pessoa pessoa={item} />} />

      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }, cardPessoas: {
    flex: 1,
    width: '90%',
    marginTop: 10,
  }
});
