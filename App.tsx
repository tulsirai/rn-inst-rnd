/* prettier-ignore */
import { StyleSheet, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (

    <View style={styles.app}>
     <HomeScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {

  },  
})

export default App;
