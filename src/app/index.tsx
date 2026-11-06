import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Study Planner</Text>

      <Text style={styles.subtitle}>Plan your study, achieve your goals!</Text>

      <Button title="Get Started" onPress={() => router.push("/home")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F3F0FF",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#5B21B6",
  },
  subtitle: {
    fontSize: 16,
    marginVertical: 15,
  },
});
