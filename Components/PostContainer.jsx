import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import { useDispatch, useSelector } from "react-redux";

import { MassagesIcon, LikesIcon, MapPin } from "../Components/Icons";

export const PostContainer = ({ hide, item }) => {
  const navigation = useNavigation();
  const someFoto = 'https://genesisairway.com/wp-content/uploads/2019/05/no-image.jpg';
  
  return (
    <View style={styles.postContainer}>
      <View style={{ width: 380 }}>
        <Image style={styles.image} source={{
          uri: item.photoUri || someFoto,
        }} />
      </View>

      <Text>{item.photoName}</Text>

      <View style={styles.postInfoContainer}>
        <TouchableOpacity
          style={styles.comments_likes_container}
          onPress={() =>
            
            navigation.navigate("Comments", { item })
          }
            >
          <MassagesIcon />
          <Text style={{ paddingRight: 18 }}>8</Text>
          {!hide && <LikesIcon />}
          {!hide && <Text>153</Text>}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.locationContainer}
          onPress={() => navigation.navigate("MapScreen")}>
          <MapPin />
          <Text style={{ textDecorationLine: "underline" }}>
            {item.locationName}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  postContainer: {
    paddingBottom: 34,
    // paddingHorizontal: 16,
    // width:"100%"
  },
  image: {
    // flex: 1,
    // justifyContent: "center",
    // resizeMode:"contain",
    resizeMode: "cover",
    // width:380,
    // paddingRight:16,
    height: 240,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#E8E8E8",
    marginBottom: 8,
  },
  postInfoContainer: {
    paddingTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  comments_likes_container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
});
