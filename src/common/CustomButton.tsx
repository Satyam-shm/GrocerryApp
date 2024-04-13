import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {hp, pixel, StyleFont} from '../utils';

type CustomButtonProps = {
  title: string;
  disabled?: boolean;
  onPress?: () => void;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  disabled,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: disabled ? 'grey' : 'orange'}]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={[styles.buttonText, {color: disabled ? 'white' : 'black'}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: hp(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: pixel(20),
  },
  buttonText: {
    ...StyleFont('400', 18),
  },
});

export default CustomButton;
