import {characterStatus} from '../enums/constants';
import colors from '../themes/colors';

//Based on Character status(Dead, unknown, Alive) I will return the Color of the status background
export const getSCharactertatusBgColor = (status: string) => {
  let statusBgColor = 'transparent';
  if (status === characterStatus.Dead) statusBgColor = colors.red;
  else if (status === characterStatus.unknown) statusBgColor = colors.skyBlue;
  else if (status === characterStatus.Alive) statusBgColor = colors.green;
  return statusBgColor;
};
