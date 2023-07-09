import {ScaledSheet, scale} from 'react-native-size-matters';
import sizeValues from '../../themes/sizeValues';
import {Dimensions} from 'react-native';
import colors from '../../themes/colors';

const {width} = Dimensions.get('screen');

const screenWidth40Percent = (width / 100) * 40;
const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  userImage: {
    height: scale(screenWidth40Percent),
    width: scale(screenWidth40Percent),
    resizeMode: 'contain',
    alignSelf: 'center',
    borderRadius: scale(screenWidth40Percent / 2),
  },
  textView: {
    marginTop: scale(10),
  },
  label: {
    flex: 75,
    fontSize: sizeValues.fontBig,
  },
  sideHeadingStyle: {
    flex: 25,
    fontSize: sizeValues.fontBig,
    fontWeight: '700',
  },
  imageView: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scale(20),
    marginBottom: scale(50),
  },
  status: {
    height: scale(25),
    alignSelf: 'stretch',
    fontSize: sizeValues.fontSmall,
    verticalAlign: 'middle',
    paddingRight: scale(10),
    paddingLeft: scale(10),
    borderRadius: scale(25 / 2),
  },
  locationLabel: {
    marginTop: scale(35),
    marginBottom: scale(20),
    color: colors.skyBlue,
    fontSize: sizeValues.fontBig,
    fontWeight: '700',
  },
});

export default styles;
