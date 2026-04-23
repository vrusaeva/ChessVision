import * as Font from 'expo-font';
//import { LinearGradient } from 'expo-linear-gradient'; 
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';
import { Alert, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(138, 105, 90)"
  },
  header: {
    flexGrow: 1.5,
    //justifyContent: "center",
    alignItems: "center",
    width: '100%',
    paddingTop: 20
  },
  title: {
    fontSize: 25,
    color: 'rgba(195, 179, 171, 1)',
    fontFamily: 'Koh Santepheap-Bold',
  },
  subhead: {
    fontFamily: 'Lohit Bengali',
    fontSize: 15
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  padButton: {
    flex: 0.5,
  },
  button: {
    flexDirection: 'row',
    flex: 5,
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 10,
    columnGap: 10,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    shadowColor: 'rgba(0, 0, 0, 0.250980406999588)',
    shadowRadius: 4,
    shadowOffset: { "width": 0, "height": 4 },
  },
  light: {
    borderWidth: 2,
    borderColor: 'rgb(212, 193, 183)',
    backgroundColor: 'rgba(195, 179, 171, 1)',
  },
  dark: {
    borderWidth: 2,
    borderColor: 'rgb(35, 21, 13)',
    backgroundColor: 'rgba(48, 30, 19, 1)',
  },
  button_text: {
    fontFamily: 'Lohit Bengali',
    fontSize: 22,
    fontStyle: 'normal',
    fontWeight: '400',
    letterSpacing: -0.48,
    includeFontPadding: false,
    textAlignVertical: 'center',
    lineHeight: 28
  },
  light_text: {
    color: 'rgba(195, 179, 171, 1)',
  },
  dark_text: {
    color: 'rgba(48, 30, 19, 1)',
  },
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  chevron: {
    width: 48,
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  icon: {
    width: 40,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
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
    'Lohit Bengali': require('../assets/fonts/Lohit-Bengali.ttf')
  });

  return (
    <View
      style={styles.container}
    >
      <LinearGradient
        colors={['#2e1d12', 'rgb(102, 42, 8)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.header}>
        <Text style={styles.title}>
          ChessVision
        </Text>
        <Text style={[styles.light_text, styles.subhead]}>
          Analyze and save your chess games.
        </Text>
        <LinearGradient
          colors={['rgba(0,0,0,0)', 'rgba(138, 105, 90, 0.3)', 'rgb(138, 105, 90)']}
          style={styles.gradientOverlay}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}></LinearGradient>
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
            <View style={styles.buttonView}>
              <View style={styles.icon}>
                <FontAwesome5
                  name='chess-queen'
                  size={40}
                  color='rgba(48, 30, 19, 1)'/>
              </View>
              <Text
                style={[styles.button_text, styles.dark_text]}>
                Capture Position
              </Text>
              <View style={styles.chevron}>
                <Entypo
                  name='chevron-thin-right'
                  size={15}
                  color='rgba(48, 30, 19, 1)' />
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.padButton}></View>
        </View>
        <View
          style={styles.buttonContainer}>
          <View style={styles.padButton}></View>
          <TouchableOpacity
            style={[styles.button, styles.dark]}
            onPress={() => Alert.alert('Button with adjusted color pressed')}>
            <View style={styles.buttonView}>
                <View style={styles.icon}>
                  <MaterialIcons
                    name='camera'
                    size={40}
                    color='#CBB1A2' />
                </View>
              <Text style={[styles.button_text, styles.light_text]}>
                Capture Game
              </Text>
                <View style={styles.chevron}>
                  <Entypo
                    name='chevron-thin-right'
                    size={15}
                    color='#CBB1A2' />
                </View>
            </View>
          </TouchableOpacity>
          <View style={styles.padButton}></View>
        </View>
        <View
          style={styles.buttonContainer}>
          <View style={styles.padButton}></View>
          <TouchableOpacity
            style={[styles.button, styles.light]}
            onPress={() => Alert.alert('Button with adjusted color pressed')}>
            <View style={styles.buttonView}>
                <View style={styles.icon}>
                  <MaterialIcons
                    name='camera-enhance'
                    size={40}
                    color='rgba(48, 30, 19, 1)' />
                </View>
              <Text
                style={[styles.button_text, styles.dark_text]}>
                Capture Game - Auto
              </Text>
                <View style={styles.chevron}>
                  <Entypo
                    name='chevron-thin-right'
                    size={15}
                    color='rgba(48, 30, 19, 1)' />
                </View>
            </View>
          </TouchableOpacity>
          <View style={styles.padButton}></View>
        </View>
        <View
          style={styles.buttonContainer}>
          <View style={styles.padButton}></View>
          <TouchableOpacity
            style={[styles.button, styles.dark]}
            onPress={() => Alert.alert('Button with adjusted color pressed')}>
            <View style={styles.buttonView}>
                <View style={styles.icon}>
                  <FontAwesome5
                    name='chess-board'
                    size={40}
                    color='#CBB1A2' />
                </View>
              <Text
                style={[styles.button_text, styles.light_text]}>
                Saved Positions
              </Text>
                <View style={styles.chevron}>
                  <Entypo
                      name='chevron-thin-right'
                      size={15}
                      color='#CBB1A2' />
                </View>
            </View>
          </TouchableOpacity>
          <View style={styles.padButton}></View>
        </View>
        <View
          style={styles.buttonContainer}>
          <View style={styles.padButton}></View>
          <TouchableOpacity
            style={[styles.button, styles.light]}
            onPress={() => Alert.alert('Button with adjusted color pressed')}>
            <View style={styles.buttonView}>
                <View style={styles.icon}>
                  <FontAwesome5
                    name='chess'
                    size={40}
                    color='rgba(48, 30, 19, 1)' />
                </View>
              <Text
                style={[styles.button_text, styles.dark_text]}>
                Saved Games
              </Text>
                <View style={styles.chevron}>
                  <Entypo
                    name='chevron-thin-right'
                    size={15}
                    color='rgba(48, 30, 19, 1)' />
                </View>
            </View>
          </TouchableOpacity>
          <View style={styles.padButton}></View>
        </View>
      </View>

      <ImageBackground
        style={styles.image}
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