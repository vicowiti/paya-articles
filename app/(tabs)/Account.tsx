import { Alert, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { storeData } from '../../data/async-storage';

const Account = () => {

    const router = useRouter()

    const showConfirmDialog = () => {
        return Alert.alert(
            "User Logout",
            "Are you sure you want to Log out?",
            [
                // The "Yes" button
                {
                    text: "Yes",
                    onPress: async () => {

                        await storeData("loggedUser", "")

                        router.replace("/")
                        ToastAndroid.show('Logout Successful!', ToastAndroid.SHORT);


                    },

                },
                // The "No" button
                // Does nothing but dismiss the dialog when tapped
                {
                    text: "No",
                },
            ]
        );
    };


    const handleLogout = () => {
        showConfirmDialog()
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.tab} onPress={handleLogout}>
                <Ionicons name='log-out' size={24} color={"red"} />
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Account

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    tab: {
        padding: 10,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: "row",
        gap: 5
    }
})