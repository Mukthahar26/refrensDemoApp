import {scale, ScaledSheet} from 'react-native-size-matters';
import sizeValues from '../../../themes/sizeValues';
import colors from '../../../themes/colors';

const styles = ScaledSheet.create({
  container: {
    padding: sizeValues.padding16,
    borderRadius: scale(4),
    elevation: 1,
    backgroundColor: colors.tranparentBlack20,
  },
});

export default styles;
