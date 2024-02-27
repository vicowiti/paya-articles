import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import TextBox from '../components/TextBox'
import CustomButton from '../components/CustomButton'

const Page = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = () => {
alert(email && password)
    }
    return (
        <View style={styles.container}>
            <View style={{ padding: 40, width: "100%", }}>

                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <View style={styles.imgcontainer}>
                        <Image
                            resizeMode='contain'
                            source={require("../assets/logo.png")}
                            style={styles.image}
                        />
                    </View>
                </View>

                <View>
                    <TextBox placeholder='Enter Email' iconName="mail" value={email} secureTextEntry={false} setter={setEmail} />
                    <TextBox placeholder='Enter Password' iconName="key" value={password} secureTextEntry={true} setter={setPassword} />
                </View>

                <CustomButton title='Submit' buttonHandler={handleSubmit} />
            </View>

        </View>
    )
}

export default Page

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#183B56"
    },
    imgcontainer: {

        padding: 15,
        backgroundColor: "#fff",
        borderRadius: 200, // Set borderRadius to half of the container's width and height
        width: 200, // Specify the width and height of the circular container
        height: 200,
        marginVertical: 30,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 60
    },
    image: {
        width: 150, // Adjust the width and height of the image as needed
        height: 150,
    },
})