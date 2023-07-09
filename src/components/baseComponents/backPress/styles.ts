import {scale, ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    padding: scale(10),
    paddingLeft: 0,
  },
  backButton: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: scale(18),
    fontWeight: '400',
    marginLeft: -25,
  },
});

export default styles;
