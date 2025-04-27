// src/screens/RecipeDetailScreen.js
import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import recipes from "../assets/data/recipes";

export default function RecipeDetailScreen({ route }) {
  const { recipeId } = route.params;
  const recipe = recipes.find((r) => r.id === recipeId);

  if (!recipe) {
    return (
      <View style={styles.container}>
        <Text>Recipe not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{recipe.title}</Text>
      <Image source={recipe.thumbnail} style={styles.image} />
      <Text style={styles.section}>Description</Text>
      <Text style={styles.text}>{recipe.description}</Text>

      <Text style={styles.section}>Ingredients</Text>
      {recipe.ingredients.map((ing, idx) => (
        <Text key={idx} style={styles.text}>
          • {ing}
        </Text>
      ))}

      <Text style={styles.section}>Steps</Text>
      {recipe.steps.map((step, idx) => (
        <Text key={idx} style={styles.text}>
          {idx + 1}. {step}
        </Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 12 },
  image: { width: "100%", height: 200, borderRadius: 8, marginBottom: 16 },
  section: { fontSize: 18, fontWeight: "600", marginTop: 16, marginBottom: 8 },
  text: { fontSize: 16, lineHeight: 24 },
});
