import {pixel} from '.';

function StyleFont(font: string, size: number, color = '#003970') {
  return {
    fontSize: pixel(size),
    color,
    fontWeight: font.toString(),
  };
}

export default StyleFont;
