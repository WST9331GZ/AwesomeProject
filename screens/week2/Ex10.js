import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, View } from 'react-native';

export default function Ex010() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
    <View style={{ flex : 1 , flexDirection : 'column' }}>    
      <View style={{ flex : 4 , backgroundColor : '#4A90E2'   }}></View>      
    </View>
    <Button title="Next" onPress={() => navigation.navigate("Ex11")} />
    </View>
  );
}
