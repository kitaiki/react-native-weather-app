import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Weather from './Weather';

const API_KEY = "open weather api key";

export default class App extends React.Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    weatherName: null,
    city: null
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.longitude, position.coords.latitude)
      },
      error => {
        this.setState({
          error: error
        });
      }
    );
  }

  _getWeather = (lon, lat) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        temperature: json.main.temp,
        weatherName: json.weather[0].main,
        city: json.name,
        isLoaded: true
      })
    });
  }

  render() {

    const { isLoaded, error, temperature, city } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>        
        {isLoaded ? 
          (
            <Weather temp={Math.floor(temperature - 273.15)} weatherName={"Clear"} city={city}/>
          ) : (
          <View style={styles.Loading}>
              <Text style={styles.loadingText1}>현재 날씨 정보를 받아오고 있습니다.</Text>
              <Text style={styles.loadingText2}>잠시만 기다려주세요.</Text>
              {error ? <Text style={styles.errorText}>{error}</Text> : null}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Loading: {
    flex: 1,
    backgroundColor: '#FDF6AA',
    justifyContent:'flex-end',
    paddingLeft: 25
  },
  loadingText1: {
    fontSize: 38,
    marginBottom: 10
  },
  loadingText2: {
    fontSize: 38,
    marginBottom: 40
  },
  errorText: {
    color: "red",
    backgroundColor: "transparent",
    marginBottom: 40
  }
});
