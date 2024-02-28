import { StyleSheet, Text, View } from 'react-native'
import React, { memo, useEffect, useState } from 'react'
import { Article, User, WelcomeCardProps } from '../types/interfaces'
import { getData } from '../data/async-storage'

const WelcomeCard = (props: WelcomeCardProps) => {

    const [articles, setArticles] = useState<Article[]>([])
    const [logged, setLogged] = useState<User | null>(null)


    const categories = ['All', 'Life', 'Tech', 'Fitness', "Travel", "Food", "Other"]

    useEffect(() => {
        async function loadArticles() {

            const data = await getData("articles")

            if (data) {
                setArticles(data)
            }

        }

        loadArticles()
    }, [])

    useEffect(() => {
        async function getUser() {
            const data: User | null = await getData("loggedUser")

            if (data) {
                setLogged(data)
            }

        }

        getUser()
    }, [])


    const myArticles = articles.filter(item => item.creator === logged?.name)



    return (
        <View >
            <Text style={{ textAlign: "center", fontWeight: "600", color: "#777", fontSize: 20 }}>Welcome {props.name}</Text>

            <Text style={{ textAlign: "center", fontWeight: "400", color: "#777", fontSize: 15 }}>Your Stats</Text>
            <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 10, gap: 20 }}>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Text>Created</Text>
                    <Text>{myArticles.length}</Text>

                </View>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Text>Read</Text>
                    <Text>0</Text>
                </View>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Text>Liked</Text>
                    <Text>0</Text>
                </View>
            </View>
        </View>
    )
}

export default memo(WelcomeCard)

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