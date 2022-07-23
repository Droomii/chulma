import 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import Tabs from './src/component/tab/Tabs';
import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import CheckIn from "./src/screen/CheckIn";
import Schedules from "./src/screen/Schedules";
import Info from "./src/screen/Info";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar/>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={'CheckIn'}>
                    <Stack.Screen name={'CheckIn'} component={CheckIn}/>
                    <Stack.Screen name={'Schedules'} component={Schedules}/>
                    <Stack.Screen name={'Info'} component={Info}/>
                </Stack.Navigator>
                <Tabs/>
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
