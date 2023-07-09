import React, {useEffect, useState} from 'react';
import MainScreen from '../../components/baseComponents/MainScreen';
import AppText from '../../components/baseComponents/AppText';
import {FlatList, ImageStyle, TextStyle, ViewStyle} from 'react-native';
import Card from '../../components/baseComponents/card';
import styles from './styles';
import {screenNames} from '../../enums/constants';
import ImageLoader from '../../components/baseComponents/imageLoader';
import {RootStackParamList} from '../../navigations/rootNavigators';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {getSCharactertatusBgColor} from '../../utils/utils';
import HeadingWithValue from '../../components/blockComponents/headingWithValue';
import {getFetch} from '../../connectivity/asyncFetch';
import Config from 'react-native-config';

type Props = NativeStackScreenProps<RootStackParamList, screenNames.HOME>;

const Home = ({navigation}: Props) => {
  const [characterList, setCharacterList] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getAllCharacters();
  }, []);

  const getAllCharacters = async () => {
    setLoading(true);
    const res: any = await getFetch(Config.CHARACTER_URL);
    setLoading(false);
    if (res && res.results) {
      setCharacterList(res.results);
    } else setCharacterList(null);
  };

  const navigateTo = (item: any) => {
    navigation.navigate(screenNames.CHARACTERDETAILS, {characterDetails: item});
  };

  const renderItems = ({item}: any) => {
    const {image, name, species, gender, status, type} = item;

    const list = [
      {type: 'Species', value: species},
      {type: 'Gender', value: gender},
      {type: 'Type', value: type},
    ];

    return (
      <Card onPress={() => navigateTo(item)} style={styles.card as ViewStyle}>
        <AppText
          style={
            [
              styles.status,
              {backgroundColor: getSCharactertatusBgColor(status)},
            ] as TextStyle
          }>
          {status}
        </AppText>
        <ImageLoader source={image} style={styles.userImage as ImageStyle} />
        <AppText numberOfLines={1} style={styles.name as TextStyle}>
          {name}
        </AppText>
        <HeadingWithValue list={list} displayWithoutSpace={true} />
      </Card>
    );
  };

  return (
    <MainScreen
      shouldGoBackEnable={false}
      isScrollRequired={false}
      loading={loading}>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={styles.columnStyle}
        data={characterList}
        renderItem={renderItems}
        keyExtractor={(_, index) => 'key' + index}
      />
    </MainScreen>
  );
};

export default Home;
