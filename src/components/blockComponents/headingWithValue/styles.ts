import {StyleSheet} from 'react-native';
import sizeValues from '../../../themes/sizeValues';
import {scale} from 'react-native-size-matters';
sizeValues;

const styles = StyleSheet.create({
  row: {
    marginTop: scale(8),
    flexDirection: 'row',
    alignItems: 'center',
  },
  type: {
    flex: 35,
    fontWeight: '700',
    fontSize: sizeValues.fontMedium,
  },
  colon: {
    flex: 5,
  },
  status: {
    fontSize: sizeValues.fontSmall,
    alignSelf: 'flex-start',
    height: scale(20),
    verticalAlign: 'middle',
    paddingRight: scale(20),
    paddingLeft: scale(20),
    borderRadius: scale(20 / 2),
  },
  withoutSpaceColon: {flex: 0, paddingRight: 3, paddingLeft: 5},
  value: {
    fontSize: sizeValues.fontMedium,
    padding: scale(3),
  },
});

export default styles;
