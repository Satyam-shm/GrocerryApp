import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {CustomButton, Header} from '../common';
import {hp, pixel, StyleFont, VectorIcon, wp} from '../utils';
import {useNavigation} from '@react-navigation/native';
import {addWishlistItem} from '../redux/WishlistSlice';
import {useDispatch, useSelector} from 'react-redux';

const ProductDetail = ({route}: any) => {
  const {item: data} = route?.params ?? {};
  const {wishlistData} = useSelector((store: any) => store.wishlistData);
  const [itemExist, setItemExist] = useState<boolean>(false);
  const dispatch = useDispatch();
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const navigation = useNavigation();

  function checkItemExist() {
    const value = wishlistData.filter((value: any) => {
      if (value?.id == data?.id) {
        return true;
      }
    });
    if (value.length > 0) setItemExist(true);
  }

  useEffect(() => {
    checkItemExist();
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Header
        title="Product Detail"
        leftIcon="arrow-left"
        leftIconStyle={styles.headerIcon}
        rightIcon="cart"
        rightIconStyle={styles.headerIcon}
        leftIconPress={() => navigation.goBack()}
      />
      <ScrollView>
        <View>
          <Image
            source={{uri: data?.image}}
            style={styles.image}
            resizeMode="contain"
          />
          <TouchableOpacity
            style={{
              height: 24,
              width: 24,
              position: 'absolute',
              right: wp(20),
              top: hp(20),
            }}
            onPress={() => setIsLiked(!isLiked)}>
            <VectorIcon
              name={isLiked ? 'cards-heart' : 'cards-heart-outline'}
              isMaterialCommunityIcon
              style={{fontSize: 26, color: isLiked ? 'red' : 'black'}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{data?.title}</Text>
          <Text style={styles.description}>{data?.description}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.priceLabel}>Price: </Text>
            <Text style={styles.priceValue}>${data?.price}</Text>
          </View>
          <CustomButton
            title={'Add to Cart'}
            onPress={async () => {
              dispatch(addWishlistItem(data));
              checkItemExist();
            }}
            disabled={itemExist}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerIcon: {
    fontSize: pixel(24),
    color: 'black',
  },
  image: {
    height: 350,
    width: 350,
    alignSelf: 'center',
    borderRadius: pixel(24),
    marginVertical: hp(10),
  },
  infoContainer: {
    paddingHorizontal: wp(16),
    marginVertical: hp(10),
    gap: 10,
  },
  title: {
    ...StyleFont('600', 26, 'black'),
  },
  description: {
    ...StyleFont('400', 16, 'grey'),
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  priceLabel: {
    ...StyleFont('600', 20, 'black'),
  },
  priceValue: {
    ...StyleFont('600', 22, 'green'),
  },
});

export default ProductDetail;
