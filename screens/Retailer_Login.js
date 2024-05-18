import { View, Text, Alert, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import Background from './Background';
import Btn from './components/Btn';
import { darkgreen, green } from './components/constants';
import Field from './components/Field';
import { TouchableOpacity } from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';

export default function Retailer_Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userLogin = async () => {
    if (!email || !password) {
      Alert.alert("Please fill all the fields");
      return;
    }
    try {
      const result = await auth().signInWithEmailAndPassword(email, password);
      console.log(result.user);
      Alert.alert("Login Successful", "You have successfully logged in!");
      props.navigation.navigate("Retailer");
    } catch (err) {
      console.error("Login Error: ", err);
      Alert.alert("Login Error", "Something went wrong. Please try again with a different password.");
    }
  };

  return (
    <Background>
      <KeyboardAvoidingView behavior="position" enabled>
        <View style={{ alignItems: 'center', width: '100%' }}>
          <Text style={{ color: 'white', fontSize: 55, fontWeight: 'bold', marginVertical: 10 }}>
            Retailer Login
          </Text>
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.welcomeText}>Welcome Retailer</Text>
          <Text style={styles.subText}>Login to your account</Text>
          <Field 
            placeholder="Email / Username"
            keyboardType="email-address"
            onChangeText={setEmail}
            value={email} 
          />
          <Field 
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={setPassword}
            value={password} 
          />
          <View style={styles.forgotPasswordContainer}>
            <Text style={styles.forgotPasswordText}>Forgot Password</Text>
          </View>
          <Btn 
            textColour='white'
            bgColor={darkgreen}
            btnLabel="Login"
            Press={userLogin} 
          />
          <View style={styles.signupContainer}>
            <Text style={{ color: green }}>
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Retailer_Register")}>
              <Text style={{ color: darkgreen, fontWeight: 'bold' }}> Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Background>
  );
}

const styles = {
  innerContainer: {
    flex: 1,
    backgroundColor: 'white',
    width: 420,
    height: 710,
    borderTopLeftRadius: 130,
    paddingTop: 50,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: "space-evenly"
  },
  welcomeText: {
    fontSize: 30,
    color: darkgreen,
    fontWeight: 'bold'
  },
  subText: {
    color: 'grey',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 20
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    width: '105%',
    paddingRight: 55,
    marginBottom: 150
  },
  forgotPasswordText: {
    color: darkgreen,
    fontWeight: "bold",
    fontSize: 16
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: "center"
  }
};
