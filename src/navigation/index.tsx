import { NavigationContainer } from '@react-navigation/native';

import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import CommentsScreen from '../screens/CommentsScreen/CommentsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen';
import { Image, Platform, StyleSheet, View } from 'react-native';
import logo from '../assets/images/logo.png';

const  Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Feed'
        screenOptions={{
          header: CustomHeader,
          headerShown: true,
        }}>
        <Stack.Screen 
          name='Feed' 
          component={HomeScreen}
        />
        <Stack.Screen 
          name='UserProfile' 
          component={ProfileScreen} 
          options={{ title: 'Profile' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const CustomHeader = ()  =>{
  return (
    <View style={styles.headerContainer}>
      <Image source={logo} style={styles.logo} resizeMode="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,  
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 2 : 0,  
  },
  logo: {
    width: 150,
    height: 40,
  }
});
export default Navigation;