import { View, Text, Image, } from 'react-native'
import React from 'react'
import user from '../../assets/data/user.json';
import styles from './styles'
import Button from '../../components/Button';

const ProfileHeader = () => {
  return (
    <View style={styles.root}>
      <View style={styles.headerRow}>
        {/* Profile image */}
        <Image
          source={{uri: user.image}}
          style={styles.avatar}
        />

        {/* Posts, followers, following number */}
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>98</Text>
          <Text>Posts</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>98</Text>
          <Text>Followers</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>98</Text>
          <Text>Following</Text>
        </View>        
      </View>
      <Text style={styles.userName}>{user.name}</Text>
      <Text>{user.bio}</Text>

      <View style={{flexDirection: 'row'}}>
        <Button 
          text='Edit Profile'
          onPress={() => console.log('On Edit Profile')}
        />
        <Button 
          text='Another Button'
          onPress={() => console.log('On Edit Profile')}
        />
      </View>      
    </View>
  )
};

export default ProfileHeader;