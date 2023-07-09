import {StyleSheet} from 'react-native';
import colors from '../../../themes/colors';
import sizeValues from '../../../themes/sizeValues';
import {scale} from 'react-native-size-matters';
sizeValues;

const styles = StyleSheet.create({
  container: {
    marginBottom: scale(50),
  },
  card: {
    padding: scale(5),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: scale(8),
    marginBottom: scale(10),
  },
  episodeNo: {
    borderWidth: 5,
    borderColor: colors.darkSkyBlue,
    width: scale(65),
    height: scale(65),
    borderRadius: scale(65 / 2),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scale(10),
  },
  epLabel: {
    fontSize: sizeValues.fontRegular,
    fontWeight: '700',
  },
  epName: {
    fontSize: sizeValues.fontBig,
    fontWeight: '800',
    color: colors.skyBlue,
  },
  epNameView: {
    flex: 1,
  },
  epNameAiredView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scale(5),
  },
  airredOnDateLabel: {
    fontSize: sizeValues.fontRegular,
    color: colors.skyBlue,
  },
  airredOnDate: {
    fontSize: sizeValues.fontSmall,
  },
});

export default styles;
