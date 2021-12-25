import React from "react";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";
import tailwind from "tailwind-rn";
import { FontAwesome5 } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const CarouselItem = ({ item }) => {
  return (
    <View style={styles.cardView}>
      <Image style={styles.image} source={{ uri: item.url }} />
      <View style={tailwind("absolute left-5 bottom-0 mb-4")}>
        <Text style={tailwind("text-white text-2xl")}>{item.title}</Text>
        <Text style={tailwind("text-white text-2xl")}>
          Starting at{" "}
          <Text style={tailwind("text-yellow-400")}>${item.price}</Text>
        </Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
        <View
          style={tailwind(
            "mt-1 flex flex-row text-white w-36 justify-between items-center bg-red-500 px-4 py-1 rounded"
          )}
        >
          <Text style={tailwind("text-white")}>ORDER NOW</Text>
          <FontAwesome5 name="concierge-bell" size={24} color="white" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: width - 20,
    height: height / 4,
    backgroundColor: "white",
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },

  textView: {
    position: "absolute",
    bottom: 10,
    margin: 10,
    left: 5,
  },
  image: {
    width: width - 20,
    height: height / 4,
    borderRadius: 10,
  },
  itemTitle: {
    color: "white",
    fontSize: 22,
    shadowColor: "#000",
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
    marginBottom: 5,
    fontWeight: "bold",
    elevation: 5,
  },
  itemDescription: {
    color: "white",
    fontSize: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
  },
});

export default CarouselItem;
