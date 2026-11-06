import {
    Button,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function Profile() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      <View style={styles.profileSection}>
        <Image
          source={{
            uri: "https://randomuser.me/api/portraits/women/44.jpg",
          }}
          style={styles.profileImage}
        />

        <Text style={styles.name}>Maryam Umer Hayat</Text>

        <Text style={styles.role}>Study Planner Student</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.info}>✉️ Email: Add your email</Text>

        <Text style={styles.info}>📚 Study Planner Student</Text>

        <Text style={styles.info}>⭐ Goal: Become a Successful Developer</Text>
      </View>

      <View style={styles.button}>
        <Button
          title="Edit Profile"
          color="#6B21A8"
          onPress={() => alert("Edit Profile Clicked!")}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F0FF",
  },
  header: {
    backgroundColor: "#6B21A8",
    padding: 25,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
  },
  profileSection: {
    alignItems: "center",
    padding: 25,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: "#7C3AED",
  },
  name: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#5B21B6",
    marginTop: 15,
  },
  role: {
    fontSize: 16,
    marginTop: 8,
  },
  infoCard: {
    backgroundColor: "white",
    margin: 20,
    padding: 20,
    borderRadius: 15,
    gap: 20,
  },
  info: {
    fontSize: 16,
    color: "#3B0764",
  },
  button: {
    margin: 20,
  },
});
