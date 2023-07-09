import {ScaledSheet, scale} from 'react-native-size-matters';
import sizeValues from '../../themes/sizeValues';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  card: {
    width: '48%',
  },
  userImage: {
    height: scale(120),
    width: '100%',
    resizeMode: 'contain',
    alignSelf: 'center',
    borderRadius: 4,
  },
  columnStyle: {
    width: '100%',
    justifyContent: 'space-between',
    marginTop: scale(10),
  },
  status: {
    position: 'absolute',
    zIndex: 1,
    top: scale(6),
    right: scale(6),
    height: scale(25),
    verticalAlign: 'middle',
    paddingRight: scale(20),
    paddingLeft: scale(20),
    borderRadius: scale(25 / 2),
  },
  textView: {
    marginTop: scale(3),
  },
  name: {
    fontSize: sizeValues.fontMedium,
    fontWeight: '700',
    width: '100%',
    textAlign: 'center',
    marginTop: scale(8),
    marginBottom: scale(12),
  },
  label: {
    fontSize: sizeValues.fontRegular,
    width: '80%',
  },
  sideHeadingStyle: {
    fontSize: sizeValues.fontRegular,
    fontWeight: '700',
  },
});

export default styles;
