import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import { MassagesIcon, LikesIcon, MapPin } from "../Components/Icons";

export const PostContainer = ({ hide }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.postContainer}>
      <Image
        style={styles.image}
        source={require("../assets/images/mountaines.png")}
      />
      <Text>Ліс</Text>

      <View style={styles.postInfoContainer}>
        <TouchableOpacity style={styles.comments_likes_container}
        onPress={()=> navigation.navigate("Comments")}
        >
          <MassagesIcon />
          <Text style={{ paddingRight: 18 }}>8</Text>
          {!hide && <LikesIcon />}
          {!hide && <Text>153</Text>}
        </TouchableOpacity>

        <TouchableOpacity style={styles.locationContainer}
          onPress={() =>navigation.navigate("MapScreen")}
        >
          <MapPin />
          <Text style={{ textDecorationLine: "underline" }}>Ukraine</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  postContainer: {
    paddingBottom: 34,
  },
  image: {
    // width: "100%",
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
