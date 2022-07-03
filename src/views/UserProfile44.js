import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import foods from "../consts/foods";
import COLORS from "../consts/colors";

const CartCard = ({ item }) => {
  return (
    <View style={style.cartCard}>
      <Image
        source={item.image}
        style={{ height: 80, width: 80, borderRadius: 40 }}
      />
      <View
        style={{
          height: 100,
          marginLeft: 10,
          paddingVertical: 20,
          flex: 1,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.name}</Text>
        <Text style={{ fontSize: 13, color: COLORS.grey }}>
          {item.ingredients}
        </Text>
        <Text style={{ fontSize: 14, color: COLORS.grey }}> {item.price}</Text>
      </View>
    </View>
  );
};

const UserProfile44 = ({ navigation }) => {
  return (
    <ScrollView>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginLeft: 30,
          marginTop: 20,
        }}
      >
        Messages
      </Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
        data={foods}
        renderItem={({ item }) => <CartCard item={item} />}
        ListFooterComponentStyle={{ paddingHorizontal: 20, marginTop: 20 }}
      />
    </ScrollView>
  );
};

export default UserProfile44;

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
});
