import {View, TextStyle, ViewStyle} from 'react-native';
import React from 'react';
import styles from './styles';
import AppText from '../../baseComponents/AppText';
import {getSCharactertatusBgColor} from '../../../utils/utils';

type listProp = {
  type: string;
  value: string;
};
type props = {
  list: listProp[];
  style?: ViewStyle;
  typeStyle?: TextStyle;
  displayWithoutSpace?: boolean;
  rowStyle?: ViewStyle;
};

const HeadingWithValue = ({
  list,
  style,
  typeStyle,
  displayWithoutSpace = false,
  rowStyle,
}: props) => {
  const renderItems = (item: listProp) => {
    const {type, value} = item;
    if (displayWithoutSpace) {
      return (
        <View style={[styles.row, {marginTop: 0}]}>
          <AppText style={[styles.type, {flex: 0}, typeStyle] as TextStyle}>
            {type}
          </AppText>
          <AppText
            style={[styles.colon, styles.withoutSpaceColon] as TextStyle}>
            :
          </AppText>

          <AppText
            numberOfLines={1}
            style={
              [
                styles.value,
                {flex: 0},
                type === 'Status' && {
                  backgroundColor: getSCharactertatusBgColor(value),
                  ...styles.status,
                },
              ] as TextStyle
            }>
            {value}
          </AppText>
        </View>
      );
    } else {
      return (
        <View style={[styles.row, rowStyle]}>
          <AppText style={[styles.type, typeStyle] as TextStyle}>
            {type}
          </AppText>
          <AppText style={styles.colon}>:</AppText>
          <View style={{flex: 64}}>
            <AppText
              style={
                [
                  styles.value,
                  type === 'Status' && {
                    backgroundColor: getSCharactertatusBgColor(value),
                    ...styles.status,
                  },
                ] as TextStyle
              }>
              {value}
            </AppText>
          </View>
        </View>
      );
    }
  };
  return (
    <View style={style}>
      {list &&
        list.map(item => {
          return item.value && renderItems(item);
        })}
    </View>
  );
};

export default HeadingWithValue;
