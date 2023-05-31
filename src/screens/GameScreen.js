import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { DiceGame } from "../components";

export default function GameScreen() {
  const [des1, setDes1] = useState(0);
  const [des2, setDes2] = useState(0);
  const [resultat, setResultat] = useState(2);

  const lanceDes = () => {
    const newValue1 = Math.floor(Math.random() * 6) + 1;
    const newValue2 = Math.floor(Math.random() * 6) + 1;
    setDes1(newValue1);
    setDes2(newValue2);
    setResultat(newValue1 + newValue2);
  };

  const resetDes = () => {
    setDes1(0);
    setDes2(0);
    setResultat(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.resultat}>Resultat {resultat}</Text>
      <View style={styles.secondContainer}>
        {/* reni */}
        <View style={styles.buttonContainer}>
          <Button title="Réinitialiser" onPress={resetDes} color="purple" />
        </View>

        {/* De */}
        <DiceGame des1={des1} des2={des2} />
        {/* btn lancer */}

        <View style={styles.buttonContainer}>
          <Button title="Lancer" onPress={lanceDes} color="purple" />
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
    padding: 20,
  },
  buttonContainer: {
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 10,
  },
  desContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  resultat: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
    color: "purple",
  },
  secondContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    width: 300,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
});
