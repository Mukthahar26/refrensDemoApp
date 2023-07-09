import {View, Text, TextStyle} from 'react-native';
import React from 'react';
import styles from './styles';

type props = {
  children: any;
  style?: TextStyle;
  props?: any;
  numberOfLines?: number;
  adjustsFontSizeToFit?: boolean;
  onPress?: any;
};

const AppText = ({children, onPress, style, ...props}: props) => {
  return (
    <Text {...props} onPress={onPress} style={[styles.textStyle, style]}>
      {children}
    </Text>
  );
};

export default AppText;
