import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { RootTabScreenProps } from "../types";
import tailwind from "tailwind-rn";
import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import Carousel from "../components/Caroussel";
import { dummyData } from "../data/DummyData";
import ListPromo from "../components/ListPromo";
import ListPopular from "../components/ListPopular";
import Category from "../components/Category";
import Picks from "../components/Picks";
import { FatestData, PicksData } from "../data/Picks";

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
          <Image
            style={styles.tinyLogo}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/test-sayna-fe3c4.appspot.com/o/test%20mobile%2Foffer%201%20(Traced).png?alt=media&token=e05f6d8a-6520-46c1-9bd5-557b0d17bcbd",
            }}
          />
          <Text style={tailwind("mx-2")}>Offers</Text>
        </View>
      </View>
      <Carousel data={dummyData} />
      <ListPromo />
      <ListPopular />
      <Category />
      <Picks data={PicksData} />
      <Picks data={FatestData} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 25,
    height: 25,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
