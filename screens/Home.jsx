import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Background from './Background';
import { darkgreen } from './components/constants';
import Btn from './components/Btn';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen(props) {
    return (
        <Background>
            <View style={styles.container}>
                <Text style={styles.title}>Retail App</Text>
                <View style={{justifyContent: "space-evenly" }}>
                <Btn bgColor={darkgreen} btnLabel="Retailer Register" textColour='white' Press={() => props.navigation.navigate("Retailer_Register")} />
                <Btn bgColor="white" btnLabel="Distributer Register" textColour={darkgreen} Press={() => props.navigation.navigate("Distributor_register")} />
                <Btn bgColor={darkgreen} btnLabel="Retailer Login" textColour='white' Press={() => props.navigation.navigate("Retailer_login")} />
                <Btn bgColor="white" btnLabel="Distributer Login" textColour={darkgreen} Press={() => props.navigation.navigate("Distributor_login")} />
                </View>
            </View>
        </Background>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        marginVertical: 100,
        alignSelf: 'center',
    },
    title: {
        color: 'white',
        fontSize: 64,
        marginBottom: 20,
        textAlign: 'center',
    },
});

export default HomeScreen;
