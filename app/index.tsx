import { StyleSheet, Text, View } from "react-native";

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
    backgroundColor: "#2E1D12"
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
      <View 
        style={styles.header}>
          <Text style={styles.title}>
            ChessVision Home
          </Text>
      </View>
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
