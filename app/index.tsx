import * as Font from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient'; // Change this to react-native-linear-gradient in actual dev build...
import { Alert, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8A695A"
  },
  header: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
  },
  title: {
    fontSize: 20,
    color: '#CBB1A2',
    fontFamily: 'Koh Santepheap-Bold',
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
    flex: 2,
    width: '100%',
    height: 200,
  },
  gradientOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '100%'
  },
})

export default function Index() {
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
              style={styles.button1}
              onPress={() => Alert.alert('Button with adjusted color pressed')}>
              <Text 
              style={styles.button1_text}>
                Take Photo
              </Text>
            </TouchableOpacity>
            <View style={styles.padButton}></View>
          </View>
          <View
          style={styles.buttonContainer}>
            <View style={styles.padButton}></View>
            <TouchableOpacity
              style={styles.button2}
              onPress={() => Alert.alert('Button with adjusted color pressed')}>
              <Text 
              style={styles.button2_text}>
                Run Game
              </Text>
            </TouchableOpacity>
            <View style={styles.padButton}></View>
          </View>
          <View
          style={styles.buttonContainer}>
            <View style={styles.padButton}></View>
            <TouchableOpacity
              style={styles.button1}
              onPress={() => Alert.alert('Button with adjusted color pressed')}>
              <Text 
              style={styles.button1_text}>
                Run Game - Auto
              </Text>
            </TouchableOpacity>
            <View style={styles.padButton}></View>
          </View>
          <View
          style={styles.buttonContainer}>
            <View style={styles.padButton}></View>
            <TouchableOpacity
              style={styles.button2}
              onPress={() => Alert.alert('Button with adjusted color pressed')}>
              <Text 
              style={styles.button2_text}>
                Past Games
              </Text>
            </TouchableOpacity>
            <View style={styles.padButton}></View>
          </View>
      </View>
      
      <ImageBackground
        style = {styles.image}
        source={{
          uri: 'https://npr.brightspotcdn.com/dims4/default/96deb04/2147483647/strip/true/crop/2250x1500+0+0/resize/880x587!/quality/90/?url=http://npr-brightspot.s3.amazonaws.com/legacy/sites/kwmu/files/202002/020620_chess_board_pexels.jpeg'
        }}>
        <LinearGradient
        colors={['#8A695A', 'rgba(0,0,0,0)']}
        style={styles.gradientOverlay}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}></LinearGradient>
        </ImageBackground>
    </View>

  );
}
