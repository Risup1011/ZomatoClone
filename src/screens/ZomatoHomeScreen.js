import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import CategoryList from '../components/CategoryList';
import RestaurantList from '../components/RestaurantList';

const ZomatoHomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      // Transform products to food items with Zomato-like data
      const foodItems = data.map(item => ({
        ...item,
        name: item.title,
        cuisine: item.category,
        rating: item.rating.rate,
        price: `$${item.price}`,
        image: item.image,
        deliveryTime: '30-40 min',
        deliveryFee: '$2.99',
        minOrder: '$10',
        isOpen: true,
        discount: '20% OFF',
      }));
      setProducts(foodItems);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  // Food categories with Zomato-like icons
  const categories = [
    { id: 'all', name: 'All', icon: '🍽️' },
    { id: "men's clothing", name: 'Main Course', icon: '🍗' },
    { id: "women's clothing", name: 'Desserts', icon: '🍰' },
    { id: 'jewelery', name: 'Appetizers', icon: '🥗' },
    { id: 'electronics', name: 'Beverages', icon: '🥤' },
  ];

  const handleSearch = (text) => {
    setSearchQuery(text);
    // Add search functionality here
  };

  const handleCategoryPress = (category) => {
    setSelectedCategory(category.id);
  };

  const handleProductPress = (product) => {
    navigation.navigate('ProductDetail', { productId: product.id });
  };

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.cuisine === selectedCategory);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Zomato" onSearch={handleSearch} />
      <ScrollView>
        {/* Location Bar */}
        <View style={styles.locationContainer}>
          <Text style={styles.locationText}>📍 Current Location</Text>
          <Text style={styles.changeLocationText}>Change</Text>
        </View>

        {/* Categories */}
        <CategoryList
          categories={categories}
          onCategoryPress={handleCategoryPress}
        />

        {/* Offers Section */}
        <View style={styles.offersContainer}>
          <Text style={styles.sectionTitle}>Offers For You</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.offerCard}>
              <Text style={styles.offerText}>20% OFF on all orders</Text>
            </View>
            <View style={styles.offerCard}>
              <Text style={styles.offerText}>Free Delivery</Text>
            </View>
          </ScrollView>
        </View>

        {/* Restaurants List */}
        {loading ? (
          <View style={styles.loadingContainer}>
            <Text>Loading...</Text>
          </View>
        ) : (
          <RestaurantList
            title={selectedCategory === 'all' ? 'All Restaurants' : categories.find(c => c.id === selectedCategory)?.name}
            restaurants={filteredProducts}
            onRestaurantPress={handleProductPress}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  locationText: {
    fontSize: 16,
    fontWeight: '500',
  },
  changeLocationText: {
    color: '#CB202D',
    fontSize: 14,
  },
  offersContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  offerCard: {
    backgroundColor: '#CB202D',
    padding: 12,
    borderRadius: 8,
    marginRight: 12,
    minWidth: 200,
  },
  offerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default ZomatoHomeScreen; 