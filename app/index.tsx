import { StyleSheet, Text, View, Image, Button, Alert, ToastAndroid } from 'react-native'
import React, { useEffect, useId, useState } from 'react'
import TextBox from '../components/TextBox'
import CustomButton from '../components/CustomButton'
import { Link, useRouter } from 'expo-router'
import { v4 as uuidv4 } from 'uuid';
import { getData, storeData } from '../data/async-storage'
import { seedArticles } from '../data/seed'
import { User } from '../types/interfaces'


const Page = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const router = useRouter()
    const uniqueId = useId();

    useEffect(() => {
        async function seed() {

            const data = await getData("articles")

            if (data === null) {
                await storeData("articles", seedArticles)
                ToastAndroid.show("Articles Seeded", ToastAndroid.SHORT);
            }


        }

        seed()

    },)

    const handleSubmit = async () => {

        if (email && password) {

            const existingUsers: User[] = await getData("users")
            if (existingUsers) {

                const matchUser = existingUsers.find(user => user.email.toLowerCase() === email.toLowerCase())

                if (matchUser) {
                    const correctPassword = matchUser.password === password;

                    if (correctPassword) {
                        ToastAndroid.show("Welcome" + matchUser.name, ToastAndroid.SHORT);

                        await storeData("loggedUser", matchUser)
                        router.push("/(tabs)/Home")
                    } else {
                        ToastAndroid.show("Wrong credentials", ToastAndroid.SHORT);
                    }
                } else {
                    ToastAndroid.show("Wrong credentials", ToastAndroid.SHORT);
                }

            } else {
                ToastAndroid.show("Wrong credentials", ToastAndroid.SHORT);
            }

        } else {
            ToastAndroid.show("Kindly fill in all the fields", ToastAndroid.SHORT);
        }
    }
    return (
        <View style={styles.container}>
            <View style={{ padding: 20, width: "100%", }}>

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
                <Link href={`/register`} asChild>
                    <Text style={{ color: "#fff", fontWeight: "300" }}>New Here? Register</Text>
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