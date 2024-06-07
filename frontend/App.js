import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home"
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
      </NavigationContainer>
    {/* <Login/> */}
    </>
  );
}
//   container: {
//     flex: 1,
//     backgroundColor: "#E4B0BB",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   image: {
//     marginBottom: 40,
//     borderRadius: 100
    
//   },
//   inputView: {
//     backgroundColor: "#FFC0CB",
//     borderRadius: 30,
//     width: "70%",
//     height: 45,
//     marginBottom: 20,
//     alignItems: "center",
//   },
//   TextInput: {
//     height: 50,
//     flex: 1,
//     padding: 10,
//     // marginLeft: 20,
//     // width:"90%"
//   },
//   forgot_button: {
//     height: 30,
//     marginBottom: 30,
//   },
//   loginBtn: {
//     width: "80%",
//     borderRadius: 25,
//     height: 50,
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 40,
//     backgroundColor: "#FF1493",
//   },
// });