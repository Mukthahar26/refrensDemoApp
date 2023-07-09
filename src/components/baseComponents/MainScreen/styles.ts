import {ScaledSheet} from 'react-native-size-matters';
import sizeValues from '../../../themes/sizeValues';
import colors from '../../../themes/colors';

const styles = ScaledSheet.create({
  container: {
    flexGrow: 1,
    padding: sizeValues.padding10,
    backgroundColor: colors.tranparentBlack80,
  },
  content: {
    flex: 1,
  },
  loadingView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
