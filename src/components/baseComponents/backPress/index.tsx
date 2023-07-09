import React from 'react';
import {View, ViewStyle, TextStyle} from 'react-native';
import AppButton from '../AppButton';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {scale} from 'react-native-size-matters';
import AppText from '../AppText';
import colors from '../../../themes/colors';

type Props = {
  headerName: string;
};
//This component used to display clickable arrow icon to go back from the current screen.
const BackPress = ({headerName}: Props) => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <AppButton
        style={styles.backButton as ViewStyle}
        onPress={() => navigation.goBack(null)}>
        <Entypo
          name={'chevron-small-left'}
          color={colors.silver}
          size={scale(25)}
        />
        <AppText style={styles.title as TextStyle}>{headerName}</AppText>
        <View />
      </AppButton>
    </View>
  );
};

export default BackPress;
