import { ScrollView, StyleSheet, Text } from "react-native";

export default function ScrollExample() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.item}>Lesson 1</Text>
      <Text style={styles.item}>Lesson 2</Text>
      <Text style={styles.item}>Lesson 3</Text>
      <Text style={styles.item}>Lesson 4</Text>
      <Text style={styles.item}>Lesson 5</Text>
      <Text style={styles.item}>Lesson 6</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  item: {
    fontSize: 24,
    padding: 30,
    backgroundColor: "#DDD6FE",
    marginBottom: 10,
  },
});
