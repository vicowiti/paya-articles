import { Stack } from 'expo-router';

export default function Layout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },


            }}
        >
            <Stack.Screen name='index' options={{
                headerShown: false
            }} />

            <Stack.Screen name='register' options={{
                headerShown: false
            }} />
            <Stack.Screen name='(tabs)' options={{
                headerShown: false
            }} />

            <Stack.Screen name='createArticle' options={{
                headerShown: true,
                title: "Create Article",
                headerStyle: {
                    backgroundColor: '#183B56',
                }
            }} />

            <Stack.Screen name='[slug]' options={{
                headerShown: true,
                title: "Read Article",
                headerStyle: {
                    backgroundColor: '#183B56',
                }
            }} />
        </Stack>
    );
}