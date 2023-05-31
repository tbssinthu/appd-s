import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Foundation as FoundationIcons } from "react-native-vector-icons";
//import DiceGame from "./src/components/DiceGame";//

export default function HomeScreen({ navigation }) {
  const goToGameScreen = () => {
    navigation.navigate("Jouer");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DICE APP</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.iconContainer}>
          <FoundationIcons name="die-six" color="black" size={80} />
        </View>
        <Pressable
          onPress={goToGameScreen}>
             <Text style={styles.texte}> Lancer le jeux
          </Text>
          </Pressable>
         
          
        
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
    marginBottom: 180,
    color: "purple",
    textAlign: "center",
    fontWeight: "bold",
  },

  texte: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
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
