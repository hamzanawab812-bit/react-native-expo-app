import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function About() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Page</Text>

      <Text>This is my first Expo App!</Text>

      <Button title="Back to Home" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "blue",
  },
});
