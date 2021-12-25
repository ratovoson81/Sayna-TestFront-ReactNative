import { FontAwesome, Fontisto, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import tailwind from "tailwind-rn";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 200,
    height: 125,
    borderRadius: 4,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

const list = (props: any) => {
  return props.data.map((element: any) => {
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
        <View style={tailwind("text-sm mt-1 flex-row justify-between")}>
          <Text style={tailwind("text-sm")}>{element.title}</Text>
          <Text style={tailwind("text-sm")}>
            <FontAwesome name="star" size={15} color="#D73624" />
            4.7<Text style={tailwind("text-gray-500")}>(7K+)</Text>
          </Text>
        </View>
        <Text style={tailwind("text-xs text-gray-500 mt-0.5 ")}>
          {element.type}
        </Text>
        <Text style={tailwind("mt-0.5 text-lg")}>
          <FontAwesome name="motorcycle" size={18} color="black" />$
          {element.price}
        </Text>
      </View>
    );
  });
};

export default function Picks(data: any) {
  return (
    <View>
      <Text style={tailwind("text-xl mt-2 ml-2 font-bold")}>
        Top Picks For You
      </Text>
      <ScrollView horizontal={true} style={tailwind("mt-2")}>
        {list(data)}
      </ScrollView>
    </View>
  );
}
