import React from 'react';
import {View, FlatList, Dimensions, ViewStyle} from 'react-native';
import styles from './styles';
import LottieView from 'lottie-react-native';
import BackPress from '../backPress';
import {useNavigation} from '@react-navigation/native';
import Loader from '../loader';

const {width} = Dimensions.get('window');

type props = {
  children: any;
  lottiStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  shouldGoBackEnable?: boolean;
  headerName?: string;
  mainContainerStyle?: ViewStyle;
  isScrollRequired: boolean;
  loading: boolean;
};
const MainScreen = ({
  children,
  lottiStyle,
  mainContainerStyle,
  shouldGoBackEnable,
  headerName,
  isScrollRequired,
  loading,
}: props) => {
  const navigation = useNavigation<any>();

  const renderUI = () => {
    if (loading) {
      return (
        <View style={styles.loadingView}>
          <Loader />
        </View>
      );
    } else {
      return (
        <>
          {shouldGoBackEnable && navigation.canGoBack() && (
            <BackPress headerName={headerName as any} />
          )}
          {isScrollRequired ? (
            <FlatList
              showsVerticalScrollIndicator={false}
              numColumns={2}
              data={[{}]}
              renderItem={() => <View style={styles.content}>{children}</View>}
            />
          ) : (
            <View>{children}</View>
          )}
        </>
      );
    }
  };

  return (
    <View style={[styles.container, mainContainerStyle]}>
      <LottieView
        style={[{width: width, position: 'absolute'}, lottiStyle]}
        source={require('../../../assets/animations/bgAnimation.json')}
        autoPlay
        loop
      />
      {renderUI()}
    </View>
  );
};

MainScreen.defaultProps = {
  shouldGoBackEnable: true,
  headerName: '',
  isScrollRequired: true,
  loading: false,
};

export default MainScreen;
