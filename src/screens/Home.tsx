import React, {useEffect, useState} from 'react';
import {Header} from '../common';
import {hp, pixel, wp, StyleFont} from '../utils';
import {useNavigation} from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {fetchProduct} from '../api/ScreenApi/fetchProduct';
import {useDispatch} from 'react-redux';
import {setData} from '../redux/productDetailSlice';

type Product = {
  id: string;
  title: string;
  image: string;
  price: number;
};

const Home = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [productList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    async function getProducts() {
      setLoading(true);
      try {
        const res = await fetchProduct();
        setProductList(res);
        dispatch(setData(res));
      } catch (error) {
        console.log('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    }
    getProducts();
  }, []);

  return (
    <>
      <Header
        title="Home"
        leftIcon="menu"
        leftIconStyle={{fontSize: pixel(24), color: 'black'}}
        leftIconPress={() => navigation.openDrawer()}
        rightIcon="cart"
        rightIconStyle={styles.headerIcon}
      />
      <View style={styles.bodyContainer}>
        {loading ? (
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator size={'large'} color={'purple'} />
          </View>
        ) : (
          <FlatList
            data={productList}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.itemContainer}
                onPress={() =>
                  navigation.navigate('ProductDetail', {item: item})
                }>
                <Image
                  source={{uri: item.image}}
                  style={styles.image}
                  resizeMode="contain"
                />
                <View>
                  <Text
                    style={{...StyleFont('400', 16, '#000')}}
                    numberOfLines={2}>
                    {item.title}
                  </Text>
                  <Text style={{...StyleFont('500', 20)}}>$ {item.price}</Text>
                </View>
              </TouchableOpacity>
            )}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    paddingHorizontal: wp(16),
    backgroundColor: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    marginVertical: hp(5),
    gap: 10,
  },
  image: {
    width: wp(100),
    height: hp(110),
  },
  headerIcon: {
    fontSize: pixel(24),
    color: 'black',
  },
});

export default Home;
