import React from "react";
import { View, Image, StyleSheet } from "react-native";
import dice0 from "../assets/dices/dice-0.png";
import dice1 from "../assets/dices/dice-1.png";
import dice2 from "../assets/dices/dice-2.png";
import dice3 from "../assets/dices/dice-3.png";
import dice4 from "../assets/dices/dice-4.png";
import dice5 from "../assets/dices/dice-5.png";
import dice6 from "../assets/dices/dice-6.png";

export default function DiceGame({ des1, des2 }) {
  const renderDiceImage = (value) => {
    switch (value) {
      case 1:
        return dice1;
      case 2:
        return dice2;
      case 3:
        return dice3;
      case 4:
        return dice4;
      case 5:
        return dice5;
      case 6:
        return dice6;
      default:
        return dice0;
    }
  };

  const valeur1 = renderDiceImage(des1);
  const valeur2 = renderDiceImage(des2);
  return (
    <View style={styles.container}>
      <View style={styles.des}>
        <Image source={valeur1} style={styles.img} />
      </View>
      <View style={styles.des}>
        <Image source={valeur2} style={styles.img} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  des: {
    width: 120,
    height: 120,
    elevation: 20,
  },

  img: {
    width: "100%",
    height: "100%", // l'image va etre à la taille de la div si on utilise cette proprieté
  },
});
