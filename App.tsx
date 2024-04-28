/* prettier-ignore */
import { ScrollView, StyleSheet, View } from 'react-native';
import FeedPost from './src/components/FeedPost';

const App = () => {
  return (

    <ScrollView style={styles.app}>
      <FeedPost />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  app: {

  },  
})

export default App;
