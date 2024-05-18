import { View, Text, StyleSheet, ScrollView ,KeyboardAvoidingView} from 'react-native';
import React ,{useState}from 'react';
import Background from './Background';
import { darkgreen } from './components/constants';
import Field from './components/Field';
import Btn from './components/Btn';
import '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Geolocation from '@react-native-community/geolocation';

export default function Retailer_Registration(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [businessName, setBusinessName] = useState('');
  const [gstNo, setGstNo] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [Upi, setUpi] = useState('');

 


  const handleRegister = () => {
    if (!email || !password || !businessName || !gstNo || !Upi || !address || !phoneNo) {
      setErrorMessage("All fields are required.");
      return;
    }
    // Geolocation.getCurrentPosition(
    //   position => {
    //     const { latitude, longitude } = position.coords;

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        firestore()
          .collection('Distributor')
          .add({
            BusinessName: businessName,
            Gst_No: gstNo,
            Address: address,
            Phone_no: phoneNo,
            Email: email,
            Upi:Upi
            // Location: new firestore.GeoPoint(latitude, longitude),
          })
          .then(() => {
            console.log('User added to Firestore!');
            alert("Registration Successful", "You have successfully registered!");
            props.navigation.navigate("Distributor_login");
          })
          .catch(error => {
            console.error("Error adding user to Firestore: ", error);
            setErrorMessage("Failed to add user details. Please try again.");
          });
      })
      .catch(error => {
        let message;
        switch (error.code) {
          case 'auth/email-already-in-use':
            message = "That email address is already in use!";
            break;
          case 'auth/invalid-email':
            message = "That email address is invalid!";
            break;
          case 'auth/weak-password':
            message = "The password is too weak!";
            break;
          default:
            message = error.message;
        }
        console.error("Registration Error: ", message);
        setErrorMessage(message);
      });
     }
  return (
    <Background>
    <KeyboardAvoidingView
        style={styles.container}
        behavior="position"
        enabled
      >
      <View style={styles.container}>
        <Text style={styles.title}>Distributor Registration</Text>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.innerContainer}>
            <Text style={styles.welcomeText}>Register Your Details</Text>
            <Field placeholder="Business Name"  onChangeText={setBusinessName} value={businessName} />
            <Field placeholder="GST No "  onChangeText={setGstNo} value={gstNo} />
            <Field placeholder="Address"  onChangeText={setAddress} value={address} />
            <Field placeholder="Phone no" onChangeText={setPhoneNo} value={phoneNo}  keyboardType="numeric" />
            <Field placeholder="Upi details" onChangeText={setUpi} value={Upi}  keyboardType="numeric" />
            <Field placeholder="Email Address"  onChangeText={setEmail} value={email}/>
            <Field placeholder="Create Password" onChangeText={setPassword} value={password} secureTextEntry />
            <Btn
               textColour='white'
              bgColor={darkgreen}
              btnLabel="Register"
              Press={handleRegister}
            />
          </View>
        </ScrollView>
      </View>
      </KeyboardAvoidingView>
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
