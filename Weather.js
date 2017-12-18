import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const weatherCases = {
    Rain: {
        colors: ["#00C6FB", "#005BEA"],
        title: "Raining like a MF",
        subtitle: "For more info look outside",
        icon: "ios-rainy"
    },
    Clear: {
        colors: ["#FEF253", "#FF7300"],
        title: "Sunny as fuck",
        subtitle: "Go get your ass burnt",
        icon: "ios-sunny"
    },
    Thunderstorm: {
        colors: ["#00ECBC", "#007ADF"],
        title: "Thunderstorm in the house",
        subtitle: "Actually, outside of the house",
        icon: "ios-thunderstorm"
    },
    Clouds: {
        colors: ["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "I know, fucking boring",
        icon: "ios-cloudy"
    },
    Snow: {
        colors: ["#7DE2FC", "#B9B6E5"],
        title: "Cold as balls",
        subtitle: "Do you want to build a snowman?",
        icon: "ios-snow"
    },
    Drizzle: {
        colors: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "Is like rain",
        icon: "ios-rainy-outline"
    }
}

function Weather({temp, weatherName, city}) {
    return (
        <LinearGradient 
            colors={weatherCases[weatherName].colors}
            style={styles.container}
        >
            <View style={styles.iconWrapper}>
                <Ionicons color="white" size={144} name={weatherCases[weatherName].icon} />
                <Text style={styles.temp}>{city} : {temp}°</Text>
            </View>
            <View style={styles.explainWrapper}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
}

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    iconWrapper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
    },
    temp: {
        fontSize: 38,
        backgroundColor: "transparent",
        color: "white",
        marginTop: 10
    },

    explainWrapper: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25
    },
    title: {
        fontSize: 38,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 10,
        fontWeight: "300"
    },
    subtitle: {
        fontSize: 25,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 24
    }
});