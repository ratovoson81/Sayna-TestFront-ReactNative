import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { PromoData } from "../data/PromoData";
import tailwind from "tailwind-rn";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 32,
    height: 32,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

const list = () => {
  return PromoData.map((element) => {
    return (
      <View key={element.id} style={{ margin: 10 }}>
        <View style={tailwind("flex flex-row justify-center")}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: element.url,
            }}
          />
        </View>
        <Text style={tailwind("text-center mt-4 text-base")}>
          {element.title}
        </Text>
      </View>
    );
  });
};

export default function ListPromo() {
  return (
    <View style={tailwind("flex flex-row justify-center mt-4")}>{list()}</View>
  );
}
