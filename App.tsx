import 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import Tabs from './src/component/tab/Tabs';
import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar/>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={'Home'}>
                    <Stack.Screen name={'Home'} component={Tabs}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
    },
});
