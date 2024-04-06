import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {VectorIcon, hp, StyleFont} from '../utils';
import {get} from '../api';
import {fetchProduct} from '../api/ScreenApi/fetchProduct';

interface HeaderProps {
  title: string;
  leftIcon?: string;
  leftIconStyle?: object;
  RightIcon?: string;
  RightIconStyle?: object;
  containerStyle?: object;
  RightIconPress?: any;
  leftIconPress?: any;
}

const Header = ({
  title,
  leftIcon,
  leftIconPress,
  leftIconStyle,
  RightIcon,
  RightIconPress,
  RightIconStyle,
  containerStyle,
}: HeaderProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {leftIcon ? (
        <VectorIcon
          name={leftIcon}
          onPress={leftIconPress}
          style={leftIconStyle}
          isMaterialCommunityIcon
        />
      ) : null}
      <Text style={styles.titleText}>{title}</Text>
      {RightIcon ? (
        <VectorIcon
          name={RightIcon}
          onPress={RightIconPress}
          style={RightIconStyle}
          isMaterialCommunityIcon
        />
      ) : null}
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
    width: '90%',

    textAlign: 'center',
  },
});
export default Header;
