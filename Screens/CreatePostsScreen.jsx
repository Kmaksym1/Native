import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  SafeAreaView,
  TouchableHighlight,
  Image,
} from "react-native";

import * as Location from "expo-location";
import { CameraIcon, Flip, MapPin, Trash } from "../Components/Icons";
import { Camera } from "expo-camera";
import { useNavigation } from "@react-navigation/native";
import * as MediaLibrary from "expo-media-library";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../Redux/Posts/postOperations";
import { postsUploading } from "../Redux/Posts/postSelector";

  
export const CreatePostsScreen = () => {
  const navigation = useNavigation();
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [photoName, setPhotoName] = useState("");
  const [locationName, setLocationName] = useState("");
  const [locationUser, setLocationUser] = useState(null);
const dispatch = useDispatch()

  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasMediaPermission, setHasMediaPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [photoUri, setPhotoUri] = useState(null);

  const loading = useSelector(postsUploading);
  // console.log(loading)
  
  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaPermission = await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaPermission(mediaPermission.status === "granted");
    })();
  }, []);
  
  const handlePublishPost = () => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }
      let location = await Location.getCurrentPositionAsync({});

      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setLocationUser(coords);
    //     console.log("locationUser", locationUser);
    // console.log("locationName", locationName);
    //   console.log("photoName", typeof (photoName));   
    dispatch(createPost({
      locationUser,
      locationName,
      photoName,
      photoUri
    }))
      navigation.navigate("Home", { screen: "Posts Screen" })
    })();
  }

  const takePicture = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      setPhotoUri(uri);
      await MediaLibrary.createAssetAsync(uri);
    }
  };


//   if (loading) {return(<View
//     style={[
//       { justifyContent: "center", alignItems: "center" },
//     ]}>
//     <Text style={{ fontFamily: "Roboto", fontSize: 22 }}>
//       Loading...
//     </Text>
//   </View>)
    
// }
  if (hasCameraPermission === null) {
    return (
      <View
        style={[
          { justifyContent: "center", alignItems: "center" },
        ]}>
        <Text style={{ fontFamily: "Roboto", fontSize: 22 }}>
          Loading...
        </Text>
      </View>
    );
  }
  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
  
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.createPostsContainer}>
            
            {!photoUri ? (
              <Camera
                style={styles.photoWrapper}
                type={type}
                ref={setCameraRef}>
                <TouchableOpacity
                  
                  style={styles.flipCamera}
                  onPress={() => {
                    setType(
                      type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    );
                  }}>
                  
                <Flip />
                </TouchableOpacity>
              
                <TouchableOpacity
                  style={styles.cameraicon}
                  onPress={takePicture}>
                  <CameraIcon />
                  
                </TouchableOpacity>
                <Image />
              </Camera>
            ) : (
              <View style={styles.photoWrapper}>
                <Image source={{ uri: photoUri }} style={styles.photo} />
              </View>
            )}

            <Text style={styles.text}>Завантажте фото</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Назва..."
                onChangeText={setPhotoName}
                value={photoName}
                onFocus={() => {
                  setIsShowKeyboard(true);
                }}
                onBlur={() => {
                  setIsShowKeyboard(false);
                }}
              />
              <View style={styles.mapInput}>
                <MapPin />
                <TextInput
                  style={{ width: "80%" }}
                  placeholder="Місцевість..."
                  onChangeText={setLocationName}
                  value={locationName}
                  onFocus={() => {
                    setIsShowKeyboard(true);
                  }}
                  onBlur={() => {
                    setIsShowKeyboard(false);
                  }}
                />
      
              </View>
              <TouchableHighlight
                underlayColor="#FF6C00"
                style={styles.submitButton}
                onPress={handlePublishPost}
              >
                <Text style={{ ...styles.buttonText, ...styles.text }}>
                  Опублікувати
                </Text>
              </TouchableHighlight>

              <View
                style={{
                  top: 130,
                  width: 70,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: "#F6F6F6",
                  justifyContent: "center",

                  alignItems: "center",
                  alignSelf: "center",
                  alignContent: "flex-end",
                }}>
                <Trash />
              </View>
              </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  createPostsContainer: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    backgroundColor: "white",
    height: "100%",
  },
  image: {
    height: 240,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#E8E8E8",
    marginBottom: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  cameraicon: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    backgroundColor: "white",
    borderRadius: 30,
    justifyContent: "center",
  },
  inputContainer: {
    marginTop: 32,
  },
  text: {
    color: "#BDBDBD",
    // fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    paddingTop: 16,
    paddingBottom: 16,
  },
  mapInput: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    paddingTop: 16,
    paddingBottom: 16,
  },
  submitButton: {
    backgroundColor: "#F6F6F6",
    height: 51,
    paddingHorizontal: 32,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 43,
  },
  photoWrapper: {
    height: 240,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#E8E8E8",
    marginBottom: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  photo: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  flipCamera: {
    position: "absolute",
    width: 40,
    height: 40,
    borderRadius:20,
    right: 10,
    bottom: 10,
    backgroundColor: "#e8e8e87a",
  },
});
