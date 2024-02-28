import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '@rneui/base'
import { CustomButtonProps } from '../types/interfaces';

const CustomButton = (props: CustomButtonProps) => {
    return (
        <Button size='lg' title={props.title} color="#f4511e" type='solid' containerStyle={{
            paddingVertical: 50
        }} onPress={props.buttonHandler}/>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "#f4511e"
    }
})