import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get('window');

const Slider = () => {
  const carouselItems = [
    {
      title: "Discount Offer",
      text: "20% OFF on all orders",
      image: { uri: 'https://via.placeholder.com/300x150.png?text=Image+1' },
    },
    {
      title: "Zinger Burger",
      text: "Only Rs. 310",
      image: { uri: 'https://via.placeholder.com/300x150.png?text=Image+2' },
    },
    {
      title: "Beef Haleem",
      text: "Only Rs. 160",
      image: { uri: 'https://via.placeholder.com/300x150.png?text=Image+3' },
    },
  ];

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  return (
    <Carousel
      layout={"default"}
      data={carouselItems}
      sliderWidth={screenWidth}
      itemWidth={screenWidth * 0.8}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    backgroundColor: '#fff',
    borderRadius: 8,
    height: 200,
    padding: 50,
    marginLeft: 25,
    marginRight: 25,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5,
  },
});

export default Slider;
