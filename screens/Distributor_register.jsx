import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import Background from './Background';
import { darkgreen } from './components/constants';
import Field from './components/Field';
import Btn from './components/Btn';

export default function Retailer_Registration(props) {
  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.title}>Distributor Registration</Text>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.innerContainer}>
            <Text style={styles.welcomeText}>Register Your Details</Text>
            <Field placeholder="Business Name" />
            <Field placeholder="GST Details" />
            <Field placeholder="Address" />
            <Field placeholder="Contact Details" />
            <Field placeholder="Email Address" />
            <Field placeholder="Upi details" />
            <Field placeholder="Create Password" />
            <Field placeholder="Password" />
            <Btn
              textColour='white'
              bgColor={darkgreen}
              btnLabel="Register"
              Press={() => {
                alert("Registration Complete");
                props.navigation.navigate("Distributor_login");
              }}
            />
          </View>
        </ScrollView>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  title: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: 'white',
    width: 420,
 
    borderTopLeftRadius: 130,
    paddingTop: 50,
    alignItems: 'center',
    alignSelf: 'center',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 30,
    color: darkgreen,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
