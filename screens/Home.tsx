import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { RootTabScreenProps } from "../types";
import tailwind from "tailwind-rn";
import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import Carousel from "../components/Caroussel";
import { TodayData } from "../data/TodayData";
import ListPromo from "../components/ListPromo";
import ListPopular from "../components/ListPopular";
import Category from "../components/Category";
import Picks from "../components/Picks";
import { FatestData, PicksData } from "../data/Picks";
import TodayCard from "../components/TodayCard";

export default function Home({ navigation }: RootTabScreenProps<"TabOne">) {
  return (
    <ScrollView style={tailwind("mt-8")}>
      <TodayCard />
      <Carousel data={TodayData} />
      <ListPromo />
      <ListPopular />
      <Category />
      <Picks data={PicksData} />
      <Picks data={FatestData} />
    </ScrollView>
  );
}
