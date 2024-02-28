import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router';
import { Article } from '../types/interfaces';
import { getData } from '../data/async-storage';

const read = () => {
    const [article, setArticle] = useState<Article | null>(null)
    const { slug } = useLocalSearchParams();

    useEffect(() => {
        async function getArticle() {
            const articles: Article[] = await getData("articles")

            const thisArticle = articles.find(item => item.id === slug)

            if (thisArticle) {
                setArticle(thisArticle)
            }
        }

        getArticle()
    })


    return (
        <View style={styles.container}>
            <Text style={styles.title}>{article?.title}</Text>
            <Text style={styles.body}>{article?.content}</Text>
            <Text style={styles.creator}>
                Written by:{article?.creator}
            </Text>
        </View>
    )
}

export default read

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },

    title: {
        fontWeight: "600",
        fontSize: 25,
        marginVertical: 10
    },
    body: {
        lineHeight: 20,

    },
    creator: {
        fontWeight: "800",
        fontSize: 15,
        marginVertical: 10
    }
})