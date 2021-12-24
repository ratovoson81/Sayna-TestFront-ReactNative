import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { View, Text, ScrollView } from "react-native";
import tailwind from "tailwind-rn";

export default function Category() {
  return (
    <ScrollView horizontal={true} style={tailwind("flex flex-row")}>
      <View style={tailwind("bg-gray-200 py-2 px-3 mx-2 rounded ")}>
        <Text>Pickup</Text>
      </View>
      <View style={tailwind("bg-gray-200 py-2 px-3 mx-2 rounded flex-row")}>
        <FontAwesome
          style={tailwind("mr-1")}
          name="star"
          size={20}
          color="black"
        />
        <Text>Ratings</Text>
        <MaterialIcons
          style={tailwind("ml-1")}
          name="keyboard-arrow-down"
          size={24}
          color="black"
        />
      </View>
      <View style={tailwind("bg-gray-200 py-2 px-3 mx-2 rounded ")}>
        <Text>Under 30 min</Text>
      </View>
      <View style={tailwind("bg-gray-200 py-2 px-3 mx-2 rounded ")}>
        <Text>Price</Text>
      </View>
    </ScrollView>
  );
}
