import * as Font from 'expo-font';
import * as ReactCamera from 'react-native-vision-camera';
//import { LinearGradient } from 'expo-linear-gradient'; // Change this to react-native-linear-gradient in actual dev build...
import { Button, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8A695A"
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
  },
  title: {
    fontSize: 20,
    color: '#F7975D',
    fontFamily: 'Koh Santepheap-Bold',
  },
  camera: {
    width: '100%',
    height: '100%',
    flex: 9
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  padButton: {
    flex: 2,
  },
  button1: {
    flexDirection: 'row',
    flex: 5,
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 10,
    columnGap: 10,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: 'rgba(195, 179, 171, 1)',
    shadowColor: 'rgba(0, 0, 0, 0.250980406999588)',
    shadowRadius: 4,
    shadowOffset: {"width":0,"height":4},
  },
  button1_text: {
    color: 'rgba(48, 30, 19, 1)',
    fontFamily: 'Lohit Bengali',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '400',
    letterSpacing: -0.48,
  },
  button2: {
    flexDirection: 'row',
    flex: 5,
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 10,
    columnGap: 10,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: 'rgba(48, 30, 19, 1)',
    shadowColor: 'rgba(0, 0, 0, 0.250980406999588)',
    shadowRadius: 4,
    shadowOffset: {"width":0,"height":4},
  },
  button2_text: {
    color: 'rgba(195, 179, 171, 1)',
    fontFamily: 'Lohit Bengali',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '400',
    letterSpacing: -0.48,
  },
  image: {
    flex: 3,
    width: '100%',
    height: '100%',
  },
  gradientOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '100%'
  },
})

export default function Camera() {
  Font.useFonts({
    'Koh Santepheap-Bold': require('../assets/fonts/KohSantepheap-Bold.ttf'),
    'Koh Santepheap-Regular': require('../assets/fonts/KohSantepheap-Regular.ttf'),
    'Lohit Bengali' : require('../assets/fonts/Lohit-Bengali.ttf')
  });

  const device = ReactCamera.useCameraDevice('back');
  const { hasPermission, requestPermission } = ReactCamera.useCameraPermission();

  if (!hasPermission) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  if (device == null) {
    return <View />;
  }

  return (
    <View
      style={styles.container}
    >
      <LinearGradient 
        colors = {['#2e1d12', '#562d15']}
        start={{x: 0, y: 0}} 
        end={{x: 1, y: 0}}
        style={styles.header}>
          <Text style={styles.title}>
            Align your board with the guidelines, then press the button to capture.
          </Text>
      </LinearGradient>
      <ReactCamera.Camera 
        style={styles.camera}
        device={device}
        isActive={true}/>
    </View>

  );
}