import {
  widthPercentageToDP as wp2dp,
  heightPercentageToDP as hp2dp,
} from 'react-native-responsive-screen';

export const hp = (dimension: number) => {
  return hp2dp((dimension / 852) * 100 + '%');
};
export const wp = (dimension: number) => {
  return wp2dp((dimension / 393) * 100 + '%');
};
