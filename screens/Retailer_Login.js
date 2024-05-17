import { View, Text, Alert } from 'react-native';
import React from 'react';
import Background from './Background';
import Btn from './components/Btn';
import { darkgreen, green } from './components/constants';
import Field from './components/Field';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Retailer_Login(props) {
  return (
    <Background>
      <View style={{ alignItems: 'center', width: '100%' }}>
        <Text style={{ color: 'white', fontSize: 62, fontWeight: 'bold', marginVertical: 10 }}>
          Retailer Login
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          width: 420,
          height: 700,
          borderTopLeftRadius: 130,
          paddingTop: 50,
          alignItems: 'center',
          alignSelf: 'center',
        }}
      >
        <Text style={{ fontSize: 30, color: darkgreen, fontWeight: 'bold' }}>Welcome Retailer</Text>
        <Text style={{ color: 'grey', fontSize: 19, fontWeight: 'bold', marginBottom: 20 }}>
          Login to your account
        </Text>
        <Field placeholder="Email / Username" keyboardType={"email-address"} />
        <Field placeholder="Password" secureTextEntry={true} />
        <View style={{ alignItems: 'flex-end', width: '105%', paddingRight: 55, marginBottom: 150 }}>
          <Text style={{ color: darkgreen, fontWeight: "bold", fontSize: 16 }}>Forgot Password</Text>
        </View>
        <Btn textColour='white' bgColor={darkgreen} btnLabel="Login" Press={() => alert("logged in")} />
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
          <Text style={{ color: green }} >Don't have an account ? </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate("Retailer_Register")}>
            <Text style={{ color: darkgreen, fontWeight: 'bold' }}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>


    </Background>
  );
}
