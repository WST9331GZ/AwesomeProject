import React from "react";
import { Image, Text, View } from "react-native";

export default function Section7() {
  return (
    <View style={{ padding: 20 }}>
      {/* View ก้อนที่ 3 */}
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 20 }}>Room Type</Text>
      </View>

      <View style={{ flexDirection: "row", padding: 10 }}>
        <Image
          style={{ width: 100, height: 100 }}
          source={require("../../assets/week3/room-8.jpg")}
        />
        <View style={{ paddingLeft: 10 }}>
          <Text style={{ fontSize: 20 }}>Standard Twin Room</Text>
          <Text style={{ fontSize: 20,color: "orange" }}>$399.99          </Text>
          <Text style={{ fontSize: 20 }}>Hurry Up! This is your last room!</Text>
        </View>
      </View>
    </View>
  );
}
