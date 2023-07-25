import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const ForecastsScreen = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [forecast, setForecast] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchForecast = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://api.blueskyapi.io/forecasts/latest?lat=${latitude}&lon=${longitude}`);
      setForecast(response.data[0]);
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1, marginRight: 5 }}
          placeholder="Latitude"
          value={latitude}
          onChangeText={setLatitude}
          keyboardType="numeric"
        />
        <TextInput
          style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1, marginLeft: 5 }}
          placeholder="Longitude"
          value={longitude}
          onChangeText={setLongitude}
          keyboardType="numeric"
        />
      </View>
      <Button title="Fetch Forecast" onPress={fetchForecast} disabled={loading} />
      {loading ? (
        <Text style={styles.text}>Loading forecast...</Text>
      ) : (
        <View styles={styles.text}>
          <Text>Forecast Moment: {forecast.forecast_moment}</Text>
          <Text>Temperature at 2m: {forecast.temperature_at_2m}</Text>
          <Text>Wind Speed at Surface: {forecast.wind_speed_gust_at_surface}</Text>
          <Text>Relative Humidity at 2m: {forecast.relative_humidity_at_2m}</Text>
        </View>
      )}
    </View>
  );
};

export default ForecastsScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  text:{
    fontSize:15
  },
});
