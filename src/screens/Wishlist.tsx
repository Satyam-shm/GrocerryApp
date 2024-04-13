import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {Header} from '../common';
import {hp, wp, StyleFont} from '../utils';
import {useDispatch, useSelector} from 'react-redux';
import {removeWishlistItem} from '../redux/WishlistSlice';

const Wishlist = () => {
  const {wishlistData} = useSelector((store: any) => store.wishlistData);
  const dispatch = useDispatch();

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Header title="Your Wishlist" />

      <FlatList
        data={wishlistData}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => {
              dispatch(removeWishlistItem(item?.id));
            }}>
            <Image
              source={{uri: item?.image}}
              style={styles.image}
              resizeMode="contain"
            />
            <View>
              <Text style={{...StyleFont('400', 16, '#000')}} numberOfLines={2}>
                {item.title}
              </Text>
              <Text style={{...StyleFont('500', 20)}}>$ {item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(16),
    backgroundColor: 'white',
  },
  searchContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    height: hp(50),
    borderRadius: 20,
    marginVertical: hp(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchIcon: {
    fontSize: 24,
    color: 'black',
    paddingHorizontal: wp(10),
  },
  input: {
    ...StyleFont('400', 14),
    flex: 1,
    color: 'black',
    alignItems: 'center',
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
  title: {
    ...StyleFont('400', 16, '#000'),
  },
  price: {
    ...StyleFont('500', 20),
  },
});

export default Wishlist;
