// src/components/RecipeCard.js
import React from "react";
import { TouchableOpacity, Image, Text, StyleSheet } from "react-native";

export default function RecipeCard({ recipe, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={recipe.thumbnail} style={styles.image} />
      <Text style={styles.title}>{recipe.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 8,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#fff",
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 120,
  },
  title: {
    padding: 8,
    fontSize: 16,
    fontWeight: "bold",
  },
});
