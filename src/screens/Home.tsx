import React, {useEffect, useState} from 'react';
import {Header} from '../common';
import {hp, pixel, wp, StyleFont} from '../utils';
import {useNavigation} from '@react-navigation/native';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {fetchProduct} from '../api/ScreenApi/fetchProduct';

const Home = () => {
  const navigation = useNavigation();
  const [productList, setProductList] = useState<[]>([]);
  useEffect(() => {
    async function getProducts() {
      try {
        const res = await fetchProduct();
        setProductList(res);
      } catch (error) {
        console.log('get produucts error ', error);
      }
    }
    getProducts();
  }, []);
  return (
    <>
      <Header
        title="Home"
        leftIcon="menu"
        leftIconStyle={{fontSize: pixel(24)}}
        leftIconPress={() => navigation.openDrawer()}
      />
      <View style={styles.bodyContainer}>
        <FlatList
          data={productList}
          keyExtractor={(item: any) => item?.id}
          renderItem={({item}: any) => {
            return (
              <View style={styles.itemContainer}>
                <Image source={{uri: item?.image}} height={100} width={100} />
                <View>
                  <Text numberOfLines={2}>{item?.title}</Text>
                  <Text style={{...StyleFont('500', 20)}}>$ {item?.price}</Text>
                </View>
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
        />
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
    borderWidth: 1,
  },
});

export default Home;
