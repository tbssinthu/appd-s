import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { Foundation as FoundationIcons } from "react-native-vector-icons";
//import DiceGame from "./src/components/DiceGame";//

export default function HomeScreen({ navigation }) {
  const goToGameScreen = () => {
    navigation.navigate("GameScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DICE APP</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.iconContainer}>
          <FoundationIcons name="die-six" color="black" size={80} />
        </View>
        <Button
          title="JOUER"
          onPress={goToGameScreen}
          color="purple"
          size={50}
        />
        <View style={styles.iconContainer}>
          <FoundationIcons name="die-six" color="black" size={80} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "pink",
  },
  title: {
    fontSize: 60,
    marginBottom: 150,
    color: "purple",
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "purple",
    borderRadius: 20,
    padding: 10,
  },
  iconContainer: {
    marginHorizontal: 10,
  },
});
