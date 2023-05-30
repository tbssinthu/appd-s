import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

export default function GameScreen() {
  const [des1, setDes1] = useState(1);
  const [des2, setDes2] = useState(1);
  const [total, setTotal] = useState(2);

  const lanceDes = () => {
    const newValue1 = Math.floor(Math.random() * 6) + 1;
    const newValue2 = Math.floor(Math.random() * 6) + 1;
    setDes1(newValue1);
    setDes2(newValue2);
    setTotal(newValue1 + newValue2);
  };

  const resetDes = () => {
    setDes1(1);
    setDes2(1);
    setTotal(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jeu de dés</Text> 
      <Text style={styles.total}>Total: {total}</Text>
      <View style={styles.desContainer}>
  <Icon name={`des-${des1}`} size={80} color="black" />
  <Icon name={`des-${des2}`} size={80} color="black" />
      </View>
      <Button title="Lancer" onPress={lanceDes} />
      <Button title="Réinitiliser" onPress={resetDes} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
  },
  desContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  desValue: {
    fontSize: 80,
    marginHorizontal: 20,
  },
  total: {
    fontSize: 24,
    marginBottom: 20,
  },
});
