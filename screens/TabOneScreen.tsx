import { View, Text, StyleSheet } from "react-native";
import { RootTabScreenProps } from "../types";
import tailwind from "tailwind-rn";
import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import Carousel from "../components/Caroussel";
import { dummyData } from "../data/Data";
//import Carousel, { Pagination } from "react-native-x2-carousel";

const DATA = [{ text: "#1" }, { text: "#2" }, { text: "#3" }];

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  function renderItem(data: any) {
    return (
      <View key={data.text} style={styles.item}>
        <Text>{data.text}</Text>
      </View>
    );
  }

  return (
    <View style={tailwind("mt-8")}>
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
      <Text style={tailwind("text-xl mt-4 ml-2 font-bold")}>
        Today'Featured
      </Text>
      <Carousel data={dummyData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    width: 200,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#dbf3fa",
  },
});
