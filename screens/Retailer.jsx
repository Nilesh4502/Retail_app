import { View, Text, FlatList,StyleSheet } from 'react-native'
import React from 'react'
import Background from './Background'
import { Avatar, Button, Card } from 'react-native-paper';
import { green } from './components/constants';


export default function Retailer() {
  const myitems = [
    {
      name: "aidc",
      year: "2018",
      phone: "23434535654",
      image: "https://picsum.photos/id/10/200/300",
      desc: "aqxqxqwxqwx"
    },
    {
      name: "sxS",
      year: "2019",
      phone: "234345654",
      image: "https://picsum.photos/id/10/200/300",
      desc: "aqxqxqwxqwx"
    },
  ]
  const renderItems = (item) => {
    return (
      <Card style={styles.card}>
        <Card.Title title={item.name} />
        <Card.Content>
          <Text variant="bodyMedium" style={{color:green}}>{item.desc}</Text>
        </Card.Content>
        <Card.Cover source={{ uri: item.image }} />
        <Card.Actions>
          <Button>200</Button>
          <Button>call seller</Button>
        </Card.Actions>
      </Card>
    )

  }
  return (
    <View>
      <FlatList
        data={myitems}
        keyExtractor={(item) => item.phone}
        renderItem={({ item }) => renderItems(item)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  card:{
      margin:10,
      elevation:2
  },
 
   });