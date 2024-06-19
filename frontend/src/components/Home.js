import {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Slider from './Slider';
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  
      <Slider/>
    </View>
  );
}

// export function HomeScreen() {
//   const [data, setData] = useState([
//     {
//       title: 'Zinger Burger',
//       price: 310,
//       image: 'https://example.com/zinger-burger.jpg', // Replace with your image URLs
//     },
//     {
//       title: 'Beef Haleem',
//       price: 160,
//       image: 'https://example.com/beef-haleem.jpg', // Replace with your image URLs
//     },
//     {
//       title: 'Chicken Haleem',
//       price: 160,
//       image: 'https://example.com/chicken-haleem.jpg', // Replace with your image URLs
//     },
//     {
//       title: 'Chicken Crispy Broast Leg',
//       price: 160,
//       image: 'https://example.com/chicken-crispy-broast-leg.jpg', // Replace with your image URLs
//     },
//   ]);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Welcome to Mohsin Foods</Text>
//       <Slider data={data} />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});


function OrdersScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Orders!</Text>
    </View>
  );
}

function NotificationsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

function MoreScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>More!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'cutlery' : 'cutlery';
            } else if (route.name === 'Orders') {
              iconName = focused ? 'list' : 'list';
            } else if (route.name === 'Notifications') {
              iconName = focused ? 'bell' : 'bell';
            } else if (route.name === 'More') {
              iconName = focused ? 'ellipsis-h' : 'ellipsis-h';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'brown',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Orders" component={OrdersScreen} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
        <Tab.Screen name="More" component={MoreScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
