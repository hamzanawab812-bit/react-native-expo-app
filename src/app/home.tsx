import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Study Planner!</Text>

      <Text style={styles.subtitle}>Your Daily Overview</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>My Tasks</Text>
        <Text>Manage your study tasks here.</Text>
        <Button title="View Tasks" onPress={() => router.push("/tasks")} />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Add New Task</Text>
        <Text>Create your daily study tasks.</Text>
        <Button title="Add Task" onPress={() => router.push("/add-tasks")} />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>My Profile</Text>
        <Text>View your profile.</Text>
        <Button title="View Profile" onPress={() => router.push("/profile")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F3F0FF",
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#5B21B6",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    marginVertical: 20,
  },
  card: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    gap: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#5B21B6",
  },
});
