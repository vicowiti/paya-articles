import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WelcomeCardProps } from '../types/interfaces'

const WelcomeCard = (props: WelcomeCardProps) => {
    return (
        <View >
            <Text style={{ textAlign: "center", fontWeight: "600", color: "#777", fontSize: 20 }}>Welcome {props.name}</Text>

            <Text style={{ textAlign: "center", fontWeight: "400", color: "#777", fontSize: 15 }}>Your Stats</Text>
            <View style={{ flexDirection: "row", justifyContent: "center", marginTop:10, gap: 20 }}>
                <View style={{justifyContent:"center", alignItems: "center"}}>
                    <Text>Created</Text>
                    <Text>0</Text>

                </View>
                <View style={{justifyContent:"center", alignItems: "center"}}>
                    <Text>Read</Text>
                    <Text>0</Text>
                </View>
                <View style={{justifyContent:"center", alignItems: "center"}}>
                    <Text>Liked</Text>
                    <Text>0</Text>
                </View>
            </View>
        </View>
    )
}

export default WelcomeCard

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 20,
        borderWidth: 3,
        borderColor: "gray",
        height: 200,
        marginBottom: 30,
        backgroundColor: "#f4511e"
    }
})