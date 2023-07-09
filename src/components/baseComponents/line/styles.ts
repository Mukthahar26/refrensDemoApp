import {scale, ScaledSheet} from 'react-native-size-matters';
import colors from '../../../themes/colors';

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    height: scale(0.5),
    backgroundColor: colors.silver,
    alignSelf: 'center',
  },
});

export default styles;
