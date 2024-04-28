import React, { ReactNode } from 'react'
import { Pressable, Text } from 'react-native';

interface IDoublePressable {
  onDoblePress?: () => void;
  children: ReactNode;
}

const DoublePressable = ({onDoblePress = () => {}, children}: IDoublePressable) => {
  let lastTap = 0;
  const handleDoublePress = () => {
    const now = Date.now(); //timestamp 234567 in millisecond
    if(now - lastTap < 300){
      onDoblePress();
    }
    lastTap = now;
  }
  return (
    <Pressable onPress={handleDoublePress}>
      {children}
    </Pressable>
  )
}

export default DoublePressable;