import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import tailwind from "tailwind-rn";
import { PopularData } from "../data/PopularFood";

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
  return PopularData.map((element) => {
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

export default function ListPopular() {
  return (
    <>
      <Text style={tailwind("text-xl mt-4 ml-2 font-bold")}>
        Polular Food for you
      </Text>
      <View style={tailwind("flex flex-row justify-center mt-4")}>
        {list()}
      </View>
    </>
  );
}
