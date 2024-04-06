import {get} from '..';

export const fetchProduct = () => {
  return get({route: 'products'});
};
