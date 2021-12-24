import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { RootTabScreenProps } from "../types";
import tailwind from "tailwind-rn";
import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import Carousel from "../components/Caroussel";
import { dummyData } from "../data/DummyData";
import ListPromo from "../components/ListPromo";
import ListPopular from "../components/ListPopular";

export default function Home({ navigation }: RootTabScreenProps<"TabOne">) {
  return (
    <ScrollView style={tailwind("mt-8")}>
      <View style={tailwind("flex flex-row justify-between")}>
        <View style={tailwind("flex flex-row")}>
          <View style={tailwind("ml-2")}>
            <SimpleLineIcons name="location-pin" size={24} color="black" />
          </View>
          <View style={tailwind("ml-2")}>
            <Text style={tailwind("text-lg")}>2600 Chadwick Rd</Text>
            <Text style={tailwind("text-sm text-gray-400")}>
              Mariette, GA 30066, USA
            </Text>
          </View>
        </View>
        <View style={tailwind("flex flex-row items-center")}>
          <Text>O </Text>
          <Text>Offers</Text>
        </View>
      </View>
      <Carousel data={dummyData} />
      <ListPromo />
      <ListPopular />
    </ScrollView>
  );
}
