import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Tasks() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Tasks</Text>

      <Text style={styles.subtitle}>Manage your daily study tasks.</Text>

      <Button title="Add New Task" onPress={() => router.push("/add-tasks")} />

      <Button title="Back to Home" onPress={() => router.push("/home")} />
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
    gap: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#5B21B6",
  },
  subtitle: {
    fontSize: 16,
  },
});
