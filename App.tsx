/* prettier-ignore */
import { StyleSheet, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import CommentsScreen from './src/screens/CommentsScreen/CommentsScreen';

const App = () => {
  return (

    <View style={styles.app}>
     <CommentsScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {

  },  
})

export default App;
