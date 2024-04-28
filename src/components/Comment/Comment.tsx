import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { IComment } from '../../types/models';

interface ICommentProps {
    comment: IComment;
}

const Comment = ({ comment }: ICommentProps) => {
  return (
    <View style={styles.comment}>
        <Text style={styles.commentText}>
            <Text style={styles.bold}>{comment.user.username}</Text>{' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </Text>
        <AntDesign name={'hearto'} style={styles.icon} color={colors.black}/>
    </View>
  )
}

const styles = StyleSheet.create({
    icon: {
        marginHorizontal: 5
      },
      text: {
        color: colors.black,  
        lineHeight: 18,  
      },
      bold: {
        fontWeight: fonts.weight.bold,
      },
      comment: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      commentText: {
        color: colors.black,
        lineHeight: 18,  
        flex: 1,
      }
})

export default Comment