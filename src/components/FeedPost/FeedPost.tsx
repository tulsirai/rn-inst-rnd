/* prettier-ignore */
import { Image, StyleSheet, Text, View } from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const FeedPost = () => {
  return (

    <View style={styles.post}>
     {/* Header  */}
     <View style={styles.header}>
      <Image 
        source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg'}}
        style={styles.userAvatar} 
      />
      <Text style={styles.userName}>trai</Text>
      <Entypo name='dots-three-horizontal' size={16} style={styles.threeDots}/>
     </View>

     {/* Content */}
    <Image 
      source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg'}} 
      style={styles.image} 
    />

     {/* Footer */}
     <View style={styles.footer}>
      <View style={styles.iconContainer} >
        <AntDesign
          name={'hearto'}
          size={24}
          style={styles.icon}
          color={colors.black}
        />
        <Ionicons
          name="chatbubble-outline"
          size={24}
          style={styles.icon}
          color={colors.black}
        />
        <Feather
          name="send"
          size={24}
          style={styles.icon}
          color={colors.black}
        />
        <Feather
          name="bookmark"
          size={24}
          style={{marginLeft: 'auto'}}
          color={colors.black}
        />
      </View>
      <Text style={styles.text}>
        Liked by {''}
        <Text style={styles.bold}>rai</Text> and{' '}
        <Text style={styles.bold}>66 others</Text>
      </Text>
      {/* Post Description */}
      <Text style={styles.text}>
        <Text style={styles.bold}>trai</Text>{' '}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, similique mollitia. Quod sunt accusantium velit ea repellendus veniam assumenda ab incidunt minima aliquid quis, sit eveniet repellat, tempora eligendi aliquam.
      </Text>

      {/* Comments */}
      <Text>View all 16 comments</Text>
      <View style={styles.comment}>
        <Text style={styles.commentText}>
          <Text style={styles.bold}>trai</Text>{' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </Text>
        <AntDesign name={'hearto'} style={styles.icon} color={colors.black}/>
      </View>
      {/* Posted Date */}
      <Text>26 April, 2024</Text>
     </View>
     
    </View>
  );
};

export default FeedPost;
