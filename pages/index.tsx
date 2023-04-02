import { StyleSheet, Text, View } from 'react-native'

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to Expo + Next.js 👋</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'teal',
    },
    text: {
        fontSize: 16,
    },
})
