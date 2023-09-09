import { StyleSheet, Text, View, Image } from "react-native";

import { MassagesIcon, LikesIcon, MapPin } from "../Components/Icons";

export const PostContainer = () => {
  return (
    <View style={styles.postContainer}>
      <Image
        style={styles.image}
        source={require("../assets/images/mountaines.png")}
      />
      <Text>Ліс</Text>

      <View style={styles.postInfoContainer}>
        <View style={styles.comments_likes_container}>
          <MassagesIcon />
          <Text style={{ paddingRight: 18 }}>8</Text>
          <LikesIcon />
          <Text>153</Text>
        </View>

        <View style={styles.locationContainer}>
          <MapPin />
          <Text style={{ textDecorationLine: "underline" }}>Ukraine</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  postContainer: {
    paddingBottom: 34,
  },
  image: {
    width: 363,
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
