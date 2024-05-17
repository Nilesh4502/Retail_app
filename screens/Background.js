import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React, { Children } from 'react'

function Background({ children }) {
  return (
    <View>
      <ImageBackground source={require("../images/background.png")}
        style={{ height: '100%' }}
      />
      <View style={{ position: "absolute" }}>
        {children}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})

export default Background;
