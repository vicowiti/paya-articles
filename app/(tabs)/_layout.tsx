
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';

const _layout = () => {
    return (
        <Tabs screenOptions={{
headerTintColor:"white",
            headerStyle: { backgroundColor: '#183B56' },
            
        }}>

            <Tabs.Screen name="Home" options={{
                title: "Home",
                tabBarIcon: ({color}) => <Ionicons name='home' size={24}  color={color}/>
            }} />

            <Tabs.Screen name="Articles" options={{
                title: "Articles",
                tabBarIcon: ({ color }) => <Ionicons name='document' size={24} color={color}/>
            }} />

        </Tabs>
    )
}

export default _layout