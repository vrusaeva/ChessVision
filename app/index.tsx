import { StyleSheet, Text, View } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  }
})

export default function Index() {
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
          <Text>Temp</Text>
          <Text>Temp</Text>
          <Text>Temp</Text>
          <Text>Temp</Text>
      </View>
    </View>
  );
}
