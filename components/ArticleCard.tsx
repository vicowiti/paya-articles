import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ArticleCardProps } from '../types/interfaces'
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const ArticleCard = ({ article }: ArticleCardProps) => {
    const router = useRouter()
    return (
        <TouchableOpacity activeOpacity={.7} onPress={() => router.push(`/${article.id}`)} style={styles.container}>
            <Text style={styles.heading}>{article.title}</Text>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 5, marginVertical: 5 }}>
                <FontAwesome name="bookmark" size={20} color="#f4511e" />
                <Text>{article.category}</Text>
            </View>
            <Text>{article.content.substring(0, 200)}...</Text>
        </TouchableOpacity>
    )
}

export default ArticleCard

const styles = StyleSheet.create({
    container: {
        padding: 30,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#777",
        marginVertical: 10
    },
    heading: {
        fontWeight: "700",
        fontSize: 20
    }
})