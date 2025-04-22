import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ReviewItem = ({ review }) => (
  <View style={styles.reviewItem}>
    <View style={styles.reviewHeader}>
      <Text style={styles.userName}>{review.user}</Text>
      <View style={styles.ratingContainer}>
        {/* <Ionicons name="star" size={14} color="#FFD700" /> */}
        <Text style={styles.rating}>{review.rating}</Text>
      </View>
    </View>
    <Text style={styles.comment}>{review.comment}</Text>
  </View>
);

const ProductReviews = ({ reviews }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Customer Reviews</Text>
      {reviews.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  reviewItem: {
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    marginLeft: 4,
    fontSize: 14,
  },
  comment: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});

export default ProductReviews; 