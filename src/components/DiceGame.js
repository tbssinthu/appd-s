import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';

export default function DiceGame() {
  const [dice1Value, setDice1Value] = useState(1);
  const [dice2Value, setDice2Value] = useState(1);
  const [resultat, setResultat] = useState(2);

  const lanceDes = () => {
    const newValue1 = Math.floor(Math.random() * 6) + 1;
    const newValue2 = Math.floor(Math.random() * 6) + 1;
    setDice1Value(newValue1);
    setDice2Value(newValue2);
    setResultat(newValue1 + newValue2);
  };

  const resetDes = () => {
    setDice1Value(1);
    setDice2Value(1);
    setResultat(0);
  };

  const renderDiceImage = (value) => {
    switch (value) {
      case 1:
        return require('../assets/dices/dice-1.png');
      case 2:
        return require('../assets/dices/dice-2.png');
      case 3:
        return require('../assets/dices/dice-3.png');
      case 4:
        return require('../assets/dices/dice-4.png');
      case 5:
        return require('../assets/dices/dice-5.png');
      case 6:
        return require('../assets/dices/dice-6.png');
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.resultat}>Resultat {resultat}</Text>
      <View style={styles.secondContainer}>
        <View style={styles.buttonContainer}>
          <Button title="Réinitialiser" onPress={resetDes} color="purple" />
        </View>
        <View style={styles.desContainer}>
          <Image style={styles.diceImage} source={renderDiceImage(dice1Value)} />
          <Image style={styles.diceImage} source={renderDiceImage(dice2Value)} />
        </View>
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
  },
  diceImage: {
    width: 80,
    height: 80,
    marginHorizontal: 10,
  },
});
