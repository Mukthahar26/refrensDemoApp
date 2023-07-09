import {getFetch} from '../connectivity/asyncFetch';
import Config from 'react-native-config';
import logger from '../utils/logger';

export const fetchCharacters = async () => {
  const res: any[] = await getFetch(Config.CHARACTER_URL);
  return res;
};
