import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Link } from "expo-router";

const app = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Horda Games Studio</Text>
      <Link href={"/explore"} style={styles.link}>
        Explore
      </Link>
    </View>
  );
};

export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "yellow",
  },
  title: {
    textAlign: "center",
    fontSize: 36,
  },
  link: {
    textAlign: "center",
    fontSize: 24,
  },
});
