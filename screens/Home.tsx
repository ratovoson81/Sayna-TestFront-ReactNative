import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { RootTabScreenProps } from "../types";
import tailwind from "tailwind-rn";
import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import Carousel from "../components/Caroussel";
import { dummyData } from "../data/DummyData";
import { PromoData } from "../data/PromoData";

export default function Home({ navigation }: RootTabScreenProps<"TabOne">) {
  const list = () => {
    return PromoData.map((element) => {
      return (
        <View key={element.id} style={{ margin: 10 }}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: element.url,
            }}
          />
          <Text>{element.title}</Text>
        </View>
      );
    });
  };
  function List() {
    return <View>{list()}</View>;
  }
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
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "asset:/images/icon.png",
          }}
        />
        <View style={tailwind("flex flex-row items-center")}>
          <Text>O </Text>
          <Text>Offers</Text>
        </View>
      </View>
      <Text style={tailwind("text-xl mt-4 ml-2 font-bold")}>
        Today'Featured
      </Text>
      <Carousel data={dummyData} />
      <Text style={tailwind("text-xl mt-4 ml-2 font-bold")}>
        Best Promotion for you
      </Text>
      {List()}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
