import React, {useState} from 'react';
import {ImageStyle, View, ViewStyle} from 'react-native';
import {Image} from 'react-native';
import Loader from '../loader';
import logger from '../../../utils/logger';

type Props = {
  source: string;
  style?: ImageStyle;
  imageView?: ViewStyle;
};

const ImageLoader = ({source, style, imageView}: Props) => {
  const [loading, setLoading] = useState(true);

  return (
    <View style={[style, imageView]}>
      {loading && <Loader />}
      <Image
        source={{uri: source}}
        style={loading ? {} : style}
        onLoadEnd={() => {
          logger.log('onLoadEndonLoadEnd');
          setLoading(false);
        }}
      />
    </View>
  );
};

export default ImageLoader;
