import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="index" options={{ title: "Welcome" }} />
      <Stack.Screen name="home" options={{ title: "Home" }} />
      <Stack.Screen name="tasks" options={{ title: "My Tasks" }} />
      <Stack.Screen name="add-tasks" options={{ title: "Add Task" }} />
      <Stack.Screen name="profile" options={{ title: "My Profile" }} />
      <Stack.Screen name="about" options={{ title: "About" }} />
      <Stack.Screen
        name="scrollview"
        options={{ title: "ScrollView Example" }}
      />
    </Stack>
  );
}
