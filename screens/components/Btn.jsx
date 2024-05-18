import { Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

function Btn({ bgColor, btnLabel, textColour, Press }) {
    return (
        <TouchableOpacity
            onPress={Press}
            style={{
                backgroundColor: bgColor,
                borderRadius: 100,
                alignItems: 'center',
                width: 350,
                marginBottom:10,
                paddingVertical: 5,
                marginVertical: 10
            }}>
            <Text style={{ color: textColour, fontSize: 25, fontWeight: "bold" }}>{btnLabel}</Text>
        </TouchableOpacity>
    )
}

export default Btn;
