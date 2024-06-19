import React,{useState} from "react";
// import { Text, View, StyleSheet } from 'react-native';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const Slider = () => {
  const [data, setData] = useState([
    {
      title: 'Zinger Burger',
      price: 310,
      image: require('../../assets/zinger.jpg'), // Replace with your image URLs
    },
    {
      title: 'Beef Haleem',
      price: 160,
      image: 'https://example.com/beef-haleem.jpg', // Replace with your image URLs
    },
    {
      title: 'Chicken Haleem',
      price: 160,
      image: 'https://example.com/chicken-haleem.jpg', // Replace with your image URLs
    },
    {
      title: 'Chicken Crispy Broast Leg',
      price: 160,
      image: 'https://example.com/chicken-crispy-broast-leg.jpg', // Replace with your image URLs
    },
  ]);

const { width: viewportWidth } = Dimensions.get('window');
console.log('viewportWidth:', viewportWidth);

  const renderItem = ({ item }) =>{
    return (
      <View style={styles.slide}>
      <Image source={item.image } style={styles.image} />
      {/* <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>Rs. {item.price}</Text> */}
    </View>
  )};
     return (
    <View>
    <Carousel
      data={data}
      renderItem={renderItem}
      sliderWidth={viewportWidth}
      itemWidth={viewportWidth}
    />
    </View>
  );
};
const styles = StyleSheet.create({
  slide: {
    backgroundColor: 'white',
    borderRadius: 8,
    height: 200,
    padding: 10,
    marginLeft: 0,
    marginRight: 0,
  },
  image: {
    width: '100%',
    height: 190,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  price: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
  },
});
export default Slider;
