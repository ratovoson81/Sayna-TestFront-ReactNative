import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { RootTabScreenProps } from "../types";
import tailwind from "tailwind-rn";
import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import Carousel from "../components/Caroussel";
import { TodayData } from "../data/TodayData";
import ListPromo from "../components/ListPromo";
import ListPopular from "../components/ListPopular";
import Category from "../components/category";
import Picks from "../components/Picks";
import { FatestData, PicksData } from "../data/Picks";
import TodayCard from "../components/todayCard";

export default function Home({ navigation }: RootTabScreenProps<"TabOne">) {
  return (
    <ScrollView style={tailwind("mt-8")}>
      <TodayCard />
      <Carousel data={TodayData} />
      <ListPromo />
      <ListPopular />
      <Category />
      <View style={tailwind(" mt-2 ml-2  flex-row justify-between")}>
        <Text style={tailwind("font-bold text-xl")}>Top Picks For You</Text>
        <Text style={tailwind("mr-2 text-red-700")}>See all</Text>
      </View>
      <Picks data={PicksData} />
      <View
        style={tailwind("text-xl mt-2 ml-2 font-bold flex-row justify-between")}
      >
        <Text style={tailwind("font-bold text-xl")}>Fatest Near You</Text>
        <Text style={tailwind("mr-2 text-red-700")}>See all</Text>
      </View>
      <Picks data={FatestData} />
    </ScrollView>
  );
}
