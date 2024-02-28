import { StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useState } from 'react'
import TextBox from '../components/TextBox'
import { ButtonGroup } from '@rneui/base'
import CustomButton from '../components/CustomButton'
import { getData, storeData } from '../data/async-storage'
import { Article, User } from '../types/interfaces'
import { useRouter } from 'expo-router'

const createArticle = () => {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [selectedIndex, setSelectedIndex] = useState(0);

    const categories = ['Life', 'Tech', 'Fitness', "Travel", "Food", "Other"]
    const router = useRouter()

    const handleCreate = async () => {


        if (title && content) {

            const user: User = await getData("loggedUser")

            const articles: Article[] = await getData("articles")
            const newArticles: Article[] = [{ id: String(Date.now()), title, content, category: categories[selectedIndex], creator: user.name }, ...articles]

            await storeData("articles", newArticles)
            ToastAndroid.show("Article Added", ToastAndroid.SHORT);
            router.push("/Articles")
        } else {
            ToastAndroid.show("Kindly fill in all the fields", ToastAndroid.SHORT);
        }

    }

    return (
        <View style={styles.container}>

            <TextBox placeholder='Add Title' value={title} setter={setTitle} secureTextEntry={false} />

            <Text>Select Category</Text>
            <ButtonGroup
                buttons={categories}
                selectedIndex={selectedIndex}
                onPress={(value) => {
                    setSelectedIndex(value);
                }}
                containerStyle={{ marginBottom: 20 }}
            />

            <TextBox multiline={true} placeholder='Add Content' value={content} setter={setContent} secureTextEntry={false} />

            <CustomButton title='Create' buttonHandler={handleCreate} />
        </View>
    )
}

export default createArticle

const styles = StyleSheet.create({
    container: {
        padding: 20
    }
})