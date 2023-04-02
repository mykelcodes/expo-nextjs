import { NavigationContainer } from '@react-navigation/native'

const Stack = createNativeStackNavigator()

import { AppQueryProvider } from '@lib/query'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeIndex from './pages'

export default function NativeRoute() {
    return (
        // <AppQueryProvider>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeIndex} />
            </Stack.Navigator>
        </NavigationContainer>
        // </AppQueryProvider>
    )
}
