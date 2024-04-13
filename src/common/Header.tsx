import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {VectorIcon, hp, StyleFont} from '../utils';

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
        <VectorIcon
          name={rightIcon}
          onPress={rightIconPress}
          style={rightIconStyle}
          isMaterialCommunityIcon
        />
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
});
export default Header;
