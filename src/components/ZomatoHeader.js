import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { icons } from './icons';

const ZomatoHeader = ({ navigation, cartCount = 0 }) => {
  const handleBack = () => {
    navigation.goBack();
  };

  const handleCartPress = () => {
    navigation.navigate('Cart');
  };

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={handleBack}>
        <Image 
          source={icons.back} 
          style={styles.icon}
        />
      </TouchableOpacity>
      <Text style={styles.title}>Zomato</Text>
      <View style={styles.rightIcons}>
        <TouchableOpacity onPress={handleCartPress} style={styles.cartContainer}>
          <Image 
            source={icons.cart} 
            style={styles.icon}
          />
          {cartCount > 0 && (
            <View style={styles.cartBadge}>
              <Text style={styles.cartCount}>{cartCount}</Text>
            </View>
          )}
        </TouchableOpacity>
        <Image 
          source={icons.fedex} 
          style={styles.icon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#CB202D',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartContainer: {
    marginRight: 16,
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: '#fff',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartCount: {
    color: '#CB202D',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default ZomatoHeader; 