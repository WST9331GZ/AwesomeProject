import React from "react";
import { Text, View } from "react-native";

export default function Section3() {
  return (
    <View style={{ padding: 20 , flexDirection:'row',  }}>
      <View
        style={{
          height: 50,
          width: 50,
          borderRadius: 50 / 2,
          backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20, color: "white" }}>9.5</Text>
      </View>

     
        <View style={{ }}>
          <Text style={{ fontSize: 20 }}>Excellent</Text>
          <Text style={{ color: "gray" }}>See 801 reviews</Text>
        </View>
      
    </View>
  );
}
