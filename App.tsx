/* prettier-ignore */
import { SafeAreaView, StyleSheet, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import CommentsScreen from './src/screens/CommentsScreen/CommentsScreen';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
import EditProfileScreen from './src/screens/EditProfileScreen';

const App = () => {
  return (

    <SafeAreaView style={styles.app}>
     {/* <HomeScreen /> */}
     {/* <CommentsScreen /> */}
     {/* <ProfileScreen /> */}
     <EditProfileScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },  
})

export default App;
