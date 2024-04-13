import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {VectorIcon, hp, StyleFont, wp, pixel} from '../utils';
import {useSelector} from 'react-redux';

interface HeaderProps {
  title: string;
  leftIcon?: string;
  leftIconStyle?: object;
  rightIcon?: string;
  rightIconStyle?: object;
  containerStyle?: object;
  rightIconPress?: any;
  leftIconPress?: any;
}

const Header = ({
  title,
  leftIcon,
  leftIconPress,
  leftIconStyle,
  rightIcon,
  rightIconPress,
  rightIconStyle,
  containerStyle,
}: HeaderProps) => {
  const {wishlistData} = useSelector((store: any) => store.wishlistData);
  return (
    <View style={[styles.container, containerStyle]}>
      {leftIcon ? (
        <VectorIcon
          name={leftIcon}
          onPress={leftIconPress}
          style={leftIconStyle}
          isMaterialCommunityIcon
        />
      ) : (
        <View />
      )}
      <Text style={styles.titleText}>{title}</Text>
      {rightIcon ? (
        <View style={{position: 'relative'}}>
          <VectorIcon
            name={rightIcon}
            onPress={rightIconPress}
            style={rightIconStyle}
            isMaterialCommunityIcon
          />
          <View style={styles.dot}>
            <Text style={{...StyleFont('600', 10)}}>
              {wishlistData?.length}
            </Text>
          </View>
        </View>
      ) : (
        <View />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp(50),
    width: '100%',
    backgroundColor: '#CCCCFF',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  titleText: {
    ...StyleFont('400', 20, '#000'),
    width: '80%',

    textAlign: 'center',
  },
  dot: {
    height: hp(15),
    width: wp(15),
    backgroundColor: 'white',
    borderRadius: pixel(50),
    position: 'absolute',
    right: wp(-5),
    top: hp(-5),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Header;
