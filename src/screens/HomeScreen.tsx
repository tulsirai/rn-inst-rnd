/* prettier-ignore */
import { FlatList } from 'react-native';
import FeedPost from './../components/FeedPost';
import posts from './../assets/data/posts.json';

const HomeScreen = () => {
  return (
    <FlatList 
        data={posts}
        renderItem={(data) => <FeedPost post={data.item}/>}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
    />
  );
};



export default HomeScreen;
