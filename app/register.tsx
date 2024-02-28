import { StyleSheet, Text, View, Image, Button, Alert, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import TextBox from '../components/TextBox'
import CustomButton from '../components/CustomButton'
import { Link, router } from 'expo-router'
import { getData, storeData } from '../data/async-storage'
import { User } from '../types/interfaces';

const Page = () => {

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async () => {
        const data: User[] | null = await getData("users")
        if (name && email && password) {

            if (!data) {
                const user: User = {
                    name,
                    email,
                    password
                }

                await storeData("users", [user])
                await storeData("loggedUser",user)
                ToastAndroid.show("Account created", ToastAndroid.SHORT);
                router.push("/(tabs)/Home")
            } else {
                const exists = data.find(item => item.email.toLowerCase() === email.toLowerCase())

                if (exists) {
                    ToastAndroid.show("User Already Exists", ToastAndroid.SHORT);
                } else {
                    await storeData("users", [...data, {
                        name, email, password
                    }])

                    ToastAndroid.show("Account created", ToastAndroid.SHORT);
                    await storeData("loggedUser", {
                        name, email, password
                    })
                    router.push("/(tabs)/Home")
                }
            }
        } else {
            ToastAndroid.show("Fill in all Fields", ToastAndroid.SHORT);
        }
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
                    <TextBox placeholder='Enter Name' iconName="person" value={name} secureTextEntry={false} setter={setName} />
                    <TextBox placeholder='Enter Email' iconName="mail" value={email} secureTextEntry={false} setter={setEmail} />
                    <TextBox placeholder='Enter Password' iconName="key" value={password} secureTextEntry={true} setter={setPassword} />
                </View>

                <CustomButton title='Create' buttonHandler={handleSubmit} />
                <Link href={`/`} asChild>
                    <Text style={{ color: "#fff", fontWeight: "300" }}>Got an Acount? Login</Text>
                </Link>
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