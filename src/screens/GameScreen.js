import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Foundation } from "react-native-vector-icons";

export default function GameScreen() {
  const [des1, setDes1] = useState(1);
  const [des2, setDes2] = useState(1);
  const [resultat, setResultat] = useState(2);

  const lanceDes = () => {
    const newValue1 = Math.floor(Math.random() * 6) + 1;
    const newValue2 = Math.floor(Math.random() * 6) + 1;
    setDes1(newValue1);
    setDes2(newValue2);
    setResultat(newValue1 + newValue2);
  };

  const resetDes = () => {
    setDes1(1);
    setDes2(1);
    setResultat(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.resultat}>Resultat {resultat}</Text>
      <View style={styles.secondContainer}>
        <View style={styles.buttonContainer}>
          <Button title="Réinitialiser" onPress={resetDes} color="purple" />
        </View>
        <View style={styles.desContainer}>
          <Foundation name="die-one" size={80} color="black" />
          <Foundation name="die-two" size={80} color="black" />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Lancer" onPress={lanceDes} color="purple" />
        </View>
      </View>
      <DiceGame />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "pink"
  },
  buttonContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
  },
  desContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  resultat: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: 'purple',
  },
  secondContainer:{
   backgroundColor:"white",
   borderRadius: 20,
   width: 300,
   height: 300,
   alignItems: 'center',
   justifyContent: 'center',
    marginBottom: 20,
  }
});

