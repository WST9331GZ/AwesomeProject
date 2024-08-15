import React from "react";
import { Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Section2() {
  return (
    <View
      style={{
        flex: 1 , marginTop: -30 , justifyContent:'center' , alignItems:'center' , backgroundColor:'red' , marginHorizontal: 20 , paddingVertical: 10 , borderRadius: 10
      }}
    >

        <Text style={{ fontSize: 20 }}>Hilton San Francisco</Text>
      <View
        style={{
          flexDirection: "row",
          marginTop: 10, marginVertical: 5
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <FontAwesome name="star" size={20} color="orange" />
          <FontAwesome name="star" size={20} color="orange" />
          <FontAwesome name="star" size={20} color="orange" />
          <FontAwesome name="star" size={20} color="orange" />
          <FontAwesome name="star-half" size={20} color="orange" />
        </View>
      </View>

      
        
        <Text style={{textAlign: "center" , fontSize: 15 }}>
          Facilities provided may range from a modest quality mattress in a
          small room to large suites
        </Text>
      
    </View>
  );
}
