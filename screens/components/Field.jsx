import { TextInput } from 'react-native';
import React from 'react';
import { darkgreen } from './constants';

export default function Field(props) {
    return (
        <TextInput
            {...props}
            style={{
                borderRadius: 100,
                color: darkgreen,
                width: '80%',
                paddingHorizontal: 20,
                paddingVertical: 10,
                backgroundColor: 'rgb(220,220,220)',
                marginVertical: 10,
            }}
            placeholderTextColor={darkgreen}
        />
    );
}
