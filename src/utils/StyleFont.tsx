import {TextStyle} from 'react-native';
import {pixel} from '.';

function StyleFont(
  font:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900',
  size: number,
  color = '#003970',
): TextStyle {
  return {
    fontSize: pixel(size),
    color,
    fontWeight: font,
  };
}

export default StyleFont;
