import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {hp, pixel, StyleFont} from '../utils';

interface CustomButtonProps {
  title: string;
  onPress?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: hp(50),
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: pixel(20),
  },
  buttonText: {
    ...StyleFont('400', 18),
  },
});

export default CustomButton;
