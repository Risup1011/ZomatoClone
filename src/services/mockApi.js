// Mock API service for product data
const products = [
  {
    id: 1,
    name: 'Classic Margherita Pizza',
    description: 'A traditional Italian pizza with fresh tomatoes, mozzarella cheese, basil, and extra virgin olive oil.',
    price: 12.99,
    rating: 4.5,
    image: 'https://b.zmtcdn.com/data/pictures/9/19617279/8c0c0a1c0c1c0c1c0c1c0c1c0c1c0c1c.jpg',
    ingredients: ['Tomato sauce', 'Mozzarella cheese', 'Fresh basil', 'Olive oil'],
    reviews: [
      { id: 1, user: 'John D.', rating: 5, comment: 'Best pizza in town!' },
      { id: 2, user: 'Sarah M.', rating: 4, comment: 'Great taste and service' }
    ]
  },
  {
    id: 2,
    name: 'Chicken Burger',
    description: 'Juicy chicken patty with fresh lettuce, tomatoes, and special sauce in a toasted bun.',
    price: 8.99,
    rating: 4.2,
    image: 'https://b.zmtcdn.com/data/pictures/2/19617282/8c0c0a1c0c1c0c1c0c1c0c1c0c1c0c1c.jpg',
    ingredients: ['Chicken patty', 'Lettuce', 'Tomato', 'Special sauce', 'Bun'],
    reviews: [
      { id: 3, user: 'Mike R.', rating: 4, comment: 'Delicious and filling' },
      { id: 4, user: 'Emma L.', rating: 5, comment: 'Perfect for lunch' }
    ]
  }
];

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find(p => p.id === parseInt(id));
      if (product) {
        resolve(product);
      } else {
        reject(new Error('Product not found'));
      }
    }, 1000); // Simulate network delay
  });
};

// Mock restaurant data similar to Zomato's format
const mockRestaurants = [
  {
    id: 1,
    name: "The Spice Garden",
    image: "https://b.zmtcdn.com/data/pictures/1/1.jpg",
    rating: 4.5,
    price: "₹₹₹",
    cuisine: ["Indian", "North Indian", "Mughlai"],
    address: "123 Food Street, Mumbai",
    timings: "11:00 AM - 11:00 PM",
    reviews: [
      {
        id: 1,
        user: "John Doe",
        rating: 5,
        comment: "Amazing food and great service!",
        date: "2024-03-15"
      },
      {
        id: 2,
        user: "Jane Smith",
        rating: 4,
        comment: "Good food but a bit pricey",
        date: "2024-03-10"
      }
    ]
  },
  {
    id: 2,
    name: "Pizza Paradise",
    image: "https://b.zmtcdn.com/data/pictures/2/2.jpg",
    rating: 4.2,
    price: "₹₹",
    cuisine: ["Italian", "Pizza", "Pasta"],
    address: "456 Italian Lane, Mumbai",
    timings: "12:00 PM - 10:00 PM",
    reviews: [
      {
        id: 3,
        user: "Mike Johnson",
        rating: 4,
        comment: "Best pizza in town!",
        date: "2024-03-12"
      }
    ]
  }
];

export const getRestaurantById = async (id) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const restaurant = mockRestaurants.find(r => r.id === id);
  if (!restaurant) {
    throw new Error('Restaurant not found');
  }
  return restaurant;
};

export const getAllRestaurants = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return mockRestaurants;
}; 