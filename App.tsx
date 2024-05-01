/* prettier-ignore */
import { SafeAreaView, StyleSheet, } from 'react-native';
// import HomeScreen from './src/screens/HomeScreen/HomeScreen';
// import CommentsScreen from './src/screens/CommentsScreen/CommentsScreen';
// import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
// import EditProfileScreen from './src/screens/EditProfileScreen';
// import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation';

const App = () => {
  return (
    <SafeAreaView style={styles.app}>
      <Navigation />
   </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },  
})

export default App;
