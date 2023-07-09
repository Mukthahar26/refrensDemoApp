import React, {useEffect, useState} from 'react';
import {View, TextStyle} from 'react-native';
import styles from './styles';
import MainScreen from '../../components/baseComponents/MainScreen';
import AppText from '../../components/baseComponents/AppText';
import {screenNames} from '../../enums/constants';
import {RootStackParamList} from '../../navigations/rootNavigators';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import ImageLoader from '../../components/baseComponents/imageLoader';
import {ImageStyle} from 'react-native';
import HeadingWithValue from '../../components/blockComponents/headingWithValue';
import {getFetch} from '../../connectivity/asyncFetch';
import EpisodeDetails from '../../components/blockComponents/episodeDetails';

type Props = NativeStackScreenProps<
  RootStackParamList,
  screenNames.CHARACTERDETAILS
>;

const CharacterDetails = ({route}: Props) => {
  const characterDetails =
    route && route.params && route.params.characterDetails;
  const {name, gender, species, status, type, image, location, episode} =
    characterDetails;

  const [loading, setLoading] = useState(true);
  const [locationData, setLocationData] = useState<any>({});
  const {
    name: locationName,
    type: locationType,
    dimension,
    residents,
  } = locationData;

  const list = [
    {type: 'Species', value: species},
    {type: 'Gender', value: gender},
    {type: 'Type', value: type},
    {type: 'Status', value: status},
  ];
  const locationList = [
    {type: 'Name', value: locationName},
    {type: 'Type', value: locationType},
    {type: 'Dimention', value: dimension},
    {type: 'No. of Residents', value: residents ? residents.length : ''},
  ];

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    const {url} = location;
    const locationRes = await getFetch(url);
    if (locationRes && locationRes.id) {
      setLocationData(locationRes);
    }
    setLoading(false);
  };

  return (
    <MainScreen loading={loading} headerName={name}>
      <View style={styles.imageView}>
        <ImageLoader source={image} style={styles.userImage as ImageStyle} />
      </View>
      <HeadingWithValue list={list} />
      <AppText style={styles.locationLabel as TextStyle}>
        Location Details :
      </AppText>
      <HeadingWithValue list={locationList} rowStyle={{marginTop: 0}} />
      <AppText style={styles.locationLabel as TextStyle}>Featured in :</AppText>
      <EpisodeDetails list={episode} />
    </MainScreen>
  );
};

export default CharacterDetails;
