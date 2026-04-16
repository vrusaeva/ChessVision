import * as Font from 'expo-font';
//import { LinearGradient } from 'expo-linear-gradient'; 
import { router } from 'expo-router';
import { Alert, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(138, 105, 90)"
  },
  header: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
  },
  title: {
    fontSize: 25,
    color: '#CBB1A2',
    fontFamily: 'Koh Santepheap-Bold',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  padButton: {
    flex: 1.5,
  },
  button: {
    flexDirection: 'row',
    flex: 5,
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 10,
    columnGap: 10,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: 'rgba(195, 179, 171, 1)',
    shadowColor: 'rgba(0, 0, 0, 0.250980406999588)',
    shadowRadius: 4,
    shadowOffset: {"width":0,"height":4},
  },
  light: {
    backgroundColor: 'rgba(195, 179, 171, 1)',
  },
  dark: {
    backgroundColor: 'rgba(48, 30, 19, 1)',
  },
  button_text: {
    fontFamily: 'Lohit Bengali',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '400',
    letterSpacing: -0.48,
  },
  light_text: {
    color: 'rgba(195, 179, 171, 1)',
  },
  dark_text: {
    color: 'rgba(48, 30, 19, 1)',
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

export default function Home() {

  Font.useFonts({
    'Koh Santepheap-Bold': require('../assets/fonts/KohSantepheap-Bold.ttf'),
    'Koh Santepheap-Regular': require('../assets/fonts/KohSantepheap-Regular.ttf'),
    'Lohit Bengali' : require('../assets/fonts/Lohit-Bengali.ttf')
  });

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
            ChessVision Home
          </Text>
      </LinearGradient>
      <View 
        style={{
          flex: 9,
          justifyContent: "space-evenly",
          alignItems: "center",
        }}>
          <View
          style={styles.buttonContainer}>
            <View style={styles.padButton}></View>
            <TouchableOpacity
              style={[styles.button, styles.light]}
              onPress={() => router.push('/camera')}>
              <Text 
              style={[styles.button_text, styles.dark_text]}>
                Capture Position
              </Text>
            </TouchableOpacity>
            <View style={styles.padButton}></View>
          </View>
          <View
          style={styles.buttonContainer}>
            <View style={styles.padButton}></View>
            <TouchableOpacity
              style={[styles.button, styles.dark]}
              onPress={() => Alert.alert('Button with adjusted color pressed')}>
              <Text 
              style={[styles.button_text, styles.light_text]}>
                Capture Game
              </Text>
            </TouchableOpacity>
            <View style={styles.padButton}></View>
          </View>
          <View
          style={styles.buttonContainer}>
            <View style={styles.padButton}></View>
            <TouchableOpacity
              style={[styles.button, styles.light]}
              onPress={() => Alert.alert('Button with adjusted color pressed')}>
              <Text 
              style={[styles.button_text, styles.dark_text]}>
                Capture Game - Auto
              </Text>
            </TouchableOpacity>
            <View style={styles.padButton}></View>
          </View>
          <View
          style={styles.buttonContainer}>
            <View style={styles.padButton}></View>
            <TouchableOpacity
              style={[styles.button, styles.dark]}
              onPress={() => Alert.alert('Button with adjusted color pressed')}>
              <Text 
              style={[styles.button_text, styles.light_text]}>
                Saved Positions
              </Text>
            </TouchableOpacity>
            <View style={styles.padButton}></View>
          </View>
          <View
          style={styles.buttonContainer}>
            <View style={styles.padButton}></View>
            <TouchableOpacity
              style={[styles.button, styles.light]}
              onPress={() => Alert.alert('Button with adjusted color pressed')}>
              <Text 
              style={[styles.button_text, styles.dark_text]}>
                Saved Games
              </Text>
            </TouchableOpacity>
            <View style={styles.padButton}></View>
          </View>
      </View>
      
      <ImageBackground
        style = {styles.image}
        source={
          require('../assets/images/homescreenchessboard.jpg')
        }>
        <LinearGradient
        colors={['#8A695A', 'rgba(0,0,0,0)']}
        style={styles.gradientOverlay}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}></LinearGradient>
        </ImageBackground>
    </View>

  );
}