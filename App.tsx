import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Calendar from "./src/component/calendar/Calendar";
import Tabs from "./src/component/tab/Tabs";

export default function App() {
  return (
    <View style={styles.container}>
      <Tabs/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
});
