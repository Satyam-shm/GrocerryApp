import axios, {AxiosRequestConfig} from 'axios';

const BASE_URL = 'https://fakestoreapi.com/';

interface ServiceProps {
  route: string;
  user?: {token: string};
}

export const get = async ({route, user}: ServiceProps): Promise<any> => {
  try {
    const headers: AxiosRequestConfig['headers'] = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    if (user?.token) {
      headers.Authorization = `Bearer ${user.token}`;
    }

    const config: AxiosRequestConfig = {
      method: 'get',
      url: `${BASE_URL}${route}`,
      headers,
    };

    const response = await axios(config);

    return response?.data;
  } catch (error) {
    // Handle errors here
    console.error('Error fetching data:', error);
    throw error;
  }
};
