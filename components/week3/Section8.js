import React from "react";
import { Button, Text, View } from "react-native";
export default function Section8() {
  return (
    <View style={{ flexDirection:'row',justifyContent:'space-between',borderTopWidth: 1 ,borderBottomWidth: 1 ,marginHorizontal: 20 ,paddingVertical: 10 ,}}>
      <View style={{ flexDirection:'column' }}>
        <Text style={{ fontSize: 10 }}>Price</Text>
        <Text style={{ fontSize: 20, color: "red" }}>$399.99</Text>
        <Text style={{ fontSize: 10 }}>AVG/Night</Text>
      </View>
      <View style={{ justifyContent: "center" }}>
        <Button title="Book Now" color="red" />
       </View>
    </View>
  );
}
