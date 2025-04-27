// src/screens/HomeScreen.js
import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import recipes from "../assets/data/recipes";
import RecipeCard from "../components/RecipeCard";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RecipeCard
            recipe={item}
            onPress={() =>
              navigation.navigate("RecipeDetail", { recipeId: item.id })
            }
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 8, backgroundColor: "#f2f2f2" },
});
