import { NavigationContainer } from '@react-navigation/native';

import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import CommentsScreen from '../screens/CommentsScreen/CommentsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen';
import { Image, StyleSheet } from 'react-native';
import logo from '../assets/images/logo.png';

const  Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Feed'
        screenOptions={{
          headerShown: true
        }}      
        >
        <Stack.Screen 
          name='Feed' 
          component={HomeScreen}
          options={{
            headerTitle: HeaderTitle , 
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen 
          name='UserProfile' 
          component={ProfileScreen} 
          options={{
             title: 'Profile',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const HeaderTitle = ()  =>{
  return (
      <Image source={logo} style={styles.logo} resizeMode='contain' />   
  );
}

const styles = StyleSheet.create({  
  logo: {
    width: 150,
    height: 40,
  }
});
export default Navigation;