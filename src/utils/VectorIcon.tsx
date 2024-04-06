import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';

interface VectorIconProp {
  name: string;
  isMaterialCommunityIcon: boolean;

  style?: object;
  onPress?: () => void;
}

const VectorIcon: React.FunctionComponent<VectorIconProp> = ({
  name,
  isMaterialCommunityIcon,

  onPress,
  style,
}: VectorIconProp) => {
  return isMaterialCommunityIcon ? (
    <MaterialIcon name={name} style={style} onPress={onPress} />
  ) : (
    <Icon name={name} style={style} onPress={onPress} />
  );
};

export default VectorIcon;
