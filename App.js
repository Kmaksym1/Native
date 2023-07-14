import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,ImageBackground } from 'react-native';

import { useFonts } from 'expo-font';
import { Registration } from './Screens/Registration';

const [fontsLoaded] = useFonts({
  'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: 'flex-end',
  },
  // text: {
  //   color: 'white',
  //   fontSize: 42,
  //   lineHeight: 84,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  //   backgroundColor: '#000000c0',
  // },
  // containerRegistration: {
  //   // flex: 2,
  //   backgroundColor: "white",
  //   marginTop: 663,
  //   width: "100%",
  //   height: "100%",
    
  // },

}
  );



export default function App() {
  // const [fontsLoaded] = useFonts({
  //   'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
  // });
  return (
    <View style={styles.container}>
    <ImageBackground source={require("./assets/California.jpeg")} style={styles.image}>
        <Registration />
    </ImageBackground>
  </View>
);

}
