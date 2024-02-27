import { Input } from '@rneui/base';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextBoxProps } from '../types/interfaces';
import { Ionicons } from '@expo/vector-icons'

const TextBox = (props: TextBoxProps) => {
    return (
        <Input
            placeholder={props.placeholder}
            value={props.value}
            leftIcon={<Ionicons name={props.iconName} size={28} color="orange" />}
            secureTextEntry={props.secureTextEntry}
            style={styles.input}
            onChangeText={value => props.setter(value)}
        />
    )
}

export default TextBox

const styles = StyleSheet.create({
    input: {
        width: "80%",
        color: "orange",
        padding: 10
    }
})