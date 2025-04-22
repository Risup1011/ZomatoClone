import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RestaurantCard from './RestaurantCard';

const RestaurantList = ({ title, restaurants, onRestaurantPress }) => {
  return (
    <View style={styles.restaurantsContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          restaurant={restaurant}
          onPress={() => onRestaurantPress(restaurant)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  restaurantsContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default RestaurantList; 