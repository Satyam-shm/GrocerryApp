import React, {useState} from 'react';
import {
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
} from 'react-native';
import {Header} from '../common';
import {useSelector} from 'react-redux';
import {VectorIcon, hp, wp, StyleFont} from '../utils';

const Search = () => {
  const {productData} = useSelector((store: any) => store.productData);
  const [filterData, setFilterData] = useState([]);
  const [value, setValue] = useState<string>('');

  const handleSearch = (txt: string) => {
    const data = productData.filter((item: any) =>
      item?.title.toLowerCase().includes(txt.toLowerCase()),
    );

    setFilterData(data);
    setValue(txt);
  };

  return (
    <View>
      <Header title="Search Items" />
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <VectorIcon
            name="magnify"
            isMaterialCommunityIcon
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search"
            value={value}
            onChangeText={handleSearch}
            placeholderTextColor={'grey'}
            style={styles.input}
          />
          {value == '' ? (
            <View />
          ) : (
            <VectorIcon
              name="window-close"
              isMaterialCommunityIcon
              onPress={() => {
                setValue(''), setFilterData([]);
              }}
              style={styles.searchIcon}
            />
          )}
        </View>
        <FlatList
          data={filterData.length > 0 ? filterData : productData}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.itemContainer}>
              <Image
                source={{uri: item?.image}}
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
        />
      </View>
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

export default Search;
