import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import styles from './styles';
import logger from '../../../utils/logger';
import {getFetch} from '../../../connectivity/asyncFetch';
import Card from '../../baseComponents/card';
import AppText from '../../baseComponents/AppText';

type Props = {
  list: string[];
};
type episodeResProps = {
  episodeNo: string;
  air_date: string;
  name: string;
};
const EpisodeDetails = ({list}: Props) => {
  const [episodeList, setEpisodeList] = useState<episodeResProps[]>([]);

  useEffect(() => {
    fetchEpisodeDetails();
  }, []);

  const fetchEpisodeDetails = async () => {
    if (list && Array.isArray(list))
      Promise.all(list.map(url => getFetch(url))).then(res => {
        let list: any = [];
        for (const item of res) {
          const {url, air_date, name} = item as any;
          const episodeNo = url.split('/');
          list.push({
            episodeNo: episodeNo[episodeNo.length - 1],
            air_date,
            name,
          });
        }
        setEpisodeList(list);
      });
  };

  const renderItems = ({item}: any) => {
    const {episodeNo, air_date, name} = item;
    return (
      <Card style={styles.card}>
        <View style={styles.episodeNo}>
          <AppText style={styles.epLabel}>Ep No.</AppText>
          <AppText style={styles.epLabel}>{episodeNo}</AppText>
        </View>
        <View style={styles.epNameView}>
          <AppText style={styles.epName} numberOfLines={2}>
            {name}
          </AppText>
          <View style={styles.epNameAiredView}>
            <AppText style={styles.airredOnDateLabel}>Aired On : </AppText>
            <AppText style={styles.airredOnDate}>{air_date}</AppText>
          </View>
        </View>
      </Card>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={episodeList}
        renderItem={renderItems}
      />
    </View>
  );
};

export default EpisodeDetails;
