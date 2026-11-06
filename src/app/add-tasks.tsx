import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
} from "react-native";

export default function AddTask() {
  const [task, setTask] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Task</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter task name"
        value={task}
        onChangeText={setTask}
      />

      <Button
        title="Add Task"
        onPress={() => {
          alert("Task: " + task);
          setTask("");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 25,
    backgroundColor: "#F3F0FF",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#5B21B6",
    textAlign: "center",
    marginBottom: 25,
  },
  input: {
    borderWidth: 1,
    borderColor: "#A78BFA",
    backgroundColor: "white",
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
});