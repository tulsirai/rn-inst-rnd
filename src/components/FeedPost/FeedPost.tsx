/* prettier-ignore */
import { Image, Pressable, Text, View } from 'react-native';
import colors from '../../theme/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import Comment from '../Comment';
import { IPost } from '../../types/models';
import { useState } from 'react';
import DoublePressable from '../DoublePressable';
import Carousel from '../Carousel';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import { useNavigation } from '@react-navigation/native';

interface IFeedPost {
    post: IPost;
    isVisible: boolean,
}

const FeedPost = ({ post, isVisible } : IFeedPost) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [IsLiked, setIsLiked] = useState(false);
  
  const navigation = useNavigation();

  const toggleIsDescriptionExpanded = () => {
    setIsDescriptionExpanded(existingValue => !existingValue);
  };

  const toggleIsLiked = () => {
    setIsLiked(v => !v);
  }
 
  let content = null;
  if(post.image){
    content = (
      <DoublePressable onDoublePress={toggleIsLiked}>
        <Image 
          source={{uri: post.image}} 
          style={styles.image} 
        />
      </DoublePressable>
    );
  }else if(post.images){
    content = <Carousel images={post.images} onDoublePress={toggleIsLiked}/>
  }else if(post.video){
    content = (
      <DoublePressable onDoublePress={toggleIsLiked}>
        <VideoPlayer uri={post.video} paused={!isVisible}/>
      </DoublePressable>
    );    
  }

  const navigateToUser = () => {
    navigation.navigate('UserProfile');
  }

  return (

    <View style={styles.post}>
     {/* Header  */}
     <View style={styles.header}>
      <Image 
        source={{uri: post.user.image}}
        style={styles.userAvatar} 
      />
      <Text onPress={navigateToUser} style={styles.userName}>{post.user.username}</Text>
      <Entypo name='dots-three-horizontal' size={16} style={styles.threeDots}/>
     </View>

     {/* Content */}     
      {content}

     {/* Footer */}
     <View style={styles.footer}>
      <View style={styles.iconContainer} >
        <Pressable onPress={toggleIsLiked}>
          <AntDesign            
            name={ IsLiked ? 'heart' : 'hearto'}
            size={24}
            style={styles.icon}
            color={ IsLiked ? colors.accent : colors.black}
          />
        </Pressable>
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
        <Text style={styles.bold}>{post.nofLikes} others</Text>
      </Text>
      {/* Post Description */}
      <Text style={styles.text} numberOfLines={isDescriptionExpanded ? 0 : 3}>
        <Text style={styles.bold}>{post.user.username}</Text>{' '}
        {post.description}
      </Text>
      <Text onPress={toggleIsDescriptionExpanded}>{isDescriptionExpanded ? 'less' : 'more'}</Text>

      {/* Comments */}
      <Text>View all {post.nofComments} comments</Text>
      {post.comments.map(comment => (
        <Comment key={comment.id}  comment={comment} />
      ))}
      
      {/* Posted Date */}
      <Text>{post.createdAt}</Text>
     </View>
     
    </View>
  );
};

export default FeedPost;
