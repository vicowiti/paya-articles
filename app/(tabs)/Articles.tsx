import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ButtonGroup } from '@rneui/base';
import { getData } from '../../data/async-storage';
import { Article } from '../../types/interfaces';
import ArticleCard from '../../components/ArticleCard';
import { FlashList } from '@shopify/flash-list';

const Articles = () => {
    const [articles, setArticles] = useState<Article[]>([])
    const [selectedIndex, setSelectedIndex] = useState(0);

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

    
    const filteredArticles = categories[selectedIndex] === "All" ? articles : articles.filter(article => article.category.toLowerCase() === categories[selectedIndex].toLowerCase())

    
    console.log(filteredArticles);
    
    return (
        <View style={styles.container}>
            <Text>Articles</Text>
            <ButtonGroup
                buttons={categories}
                selectedIndex={selectedIndex}
                onPress={(value) => {
                    setSelectedIndex(value);
                }}
                containerStyle={{ marginBottom: 20 }}
            />

            <View style={{flex: 1}}>
                <FlashList
                    estimatedItemSize={150}
                    data={articles}
                    renderItem={({ item, index }) => <ArticleCard key={item.id} article={item} />}
                    keyExtractor={(item, index) => String(index)}
                />
            </View>
            {filteredArticles.length < 1 && <Text style={{textAlign: "center"}}>No Articles Here</Text>}
        </View>
    )
}

export default Articles

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1
    }
})