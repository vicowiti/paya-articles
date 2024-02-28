import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link, useRouter } from 'expo-router'
import WelcomeCard from '../../components/WelcomeCard'
import { AntDesign } from '@expo/vector-icons';
import { Article, User } from '../../types/interfaces';
import { getData } from '../../data/async-storage';
import ArticleCard from '../../components/ArticleCard';

const Home = () => {

    const [articles, setArticles] = useState<Article[]>([])
    const [logged, setLogged] = useState<User | null>(null)

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
    })

    const router = useRouter()

    const handleCreate = () => {
        router.push("/createArticle")
    }
    return (
        <View style={styles.container}>
            <WelcomeCard name={logged?.name as string} />
            <TouchableOpacity onPress={handleCreate} style={{ flexDirection: "row", alignItems: "center", gap: 5, marginVertical: 20,}}>
                
                <Text>Create Article</Text>
                <AntDesign name="pluscircle" size={20} color="black" />
            </TouchableOpacity>
            <View style={styles.row}>
                <Text style={styles.text}>Top Stories</Text>
                <Link href={`/(tabs)/Articles`} asChild>
                    <Text style={styles.text}>View All</Text>
                </Link>
            </View>

            <ScrollView>
                {articles.map(article => <ArticleCard key={article.id} article={article} />)}
                {articles.map(article => <ArticleCard key={article.id} article={article} />)}
            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    text: {
        fontWeight: "600",
        fontSize: 15,
        color: "gray"
    }
})