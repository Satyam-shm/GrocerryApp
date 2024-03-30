import React from 'react';
import {Text, View} from 'react-native';

const App: React.FunctionComponent = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Text style={{fontSize: 20, color: 'black'}}>Hello Grocerry app</Text>
    </View>
  );
};

export default App;
