import * as Font from 'expo-font';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

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
    width: '100%'
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Koh Santepheap-Regular',
  },
  button1: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingLeft: 50,
    paddingBottom: 20,
    paddingRight: 50,
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
})

export default function Index() {
  Font.useFonts({
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
          flex: 8,
          justifyContent: "center",
          alignItems: "center",
        }}>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => Alert.alert('Button with adjusted color pressed')}>
            <Text 
            style={styles.button1_text}>
              Take Photo
            </Text>
          </TouchableOpacity>
          <Text>Temp</Text>
          <Text>Temp</Text>
          <Text>Temp</Text>
      </View>
    </View>
  );
}
