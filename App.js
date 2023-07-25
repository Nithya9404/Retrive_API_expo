import React from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
import ForecastsScreen from './ForecastsScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

const App = () => {
return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}></Stack.Screen>
        <Stack.Screen name='Forecast' component={ForecastsScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
 
}
function Home({navigation}){
  return(
      <View style={styles.container}>
        <Text style={styles.text}>Welcome....</Text>
        <View style={styles.spacing}></View>
        <Button title='See Forecast' onPress={()=>navigation.navigate('Forecast')}></Button>
        </View>
  );
      }


export default App;

const styles = StyleSheet.create({
container:{
  flex:1,
  alignItems:'center',
  justifyContent:'center',
},
text:{
  fontSize:20,
  fontWeight:'bold'
},
spacing:{height:20},
});
