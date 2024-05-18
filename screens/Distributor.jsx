import React,{useState} from 'react'
import { View, Text,StyleSheet,Alert} from 'react-native'
import { TextInput,Button} from 'react-native-paper'

import { ScrollView } from 'react-native-gesture-handler';

export default function Distributor() {
  const [itemName,setItemname]=useState('')
  const [itemDetails,setItemDetails]=useState('')
  const [itemno,setItemno]=useState('')
  const [Qrcode,setQrcode]=useState('')
  const [price,setPrice]=useState('')
  const [image,setImage]=useState('')
  
  return (
    
    <View style={styles.container}>
            <Text style={styles.text}>Create Ad!</Text>
            <TextInput
                label="Ad Item"
                value={itemName}
                mode="outlined"
                onChangeText={text => setItemname(text)}
                />
            <TextInput
                label="Describe what you are selling"
                value={itemDetails}
                mode="outlined"
                numberOfLines={3}
                multiline={true}
                onChangeText={text => setItemDetails(text)}
                />
                <TextInput
                label=" No of items"
                value={itemno}
                mode="outlined"
                keyboardType="numeric"
                onChangeText={text => setItemno(text)}
                />
                <TextInput
                label="price in INR"
                value={price}
                mode="outlined"
                keyboardType="numeric"
                onChangeText={text => setPrice(text)}
                />
                <Button icon="camera"  mode="contained" onPress={() => openCamera()}>
                     upload Qrcode
                 </Button>
                 <Button icon="camera"  mode="contained" onPress={() => openCamera()}>
                     upload item image
                 </Button>
                <Button disabled={image?false:true} mode="contained" onPress={() =>postData()}>
                     Post
                 </Button>
        </View>
       
    )
}

const styles = StyleSheet.create({
container:{
    flex:1,
    marginHorizontal:30,
    justifyContent:"space-evenly"
},
text:{
    fontSize:22,
    textAlign:"center"
}
 });
