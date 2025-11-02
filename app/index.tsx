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
    backgroundColor: "#2E1D12",
    width: '100%'
  },
  title: {
    fontSize: 20,
    color: 'white',
  }
})

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <LinearGradient colors = {['2E1D12', '562D15']}
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
