import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {Array(7).fill(0).map((v, i1) => (
          <View style={{flex: 1, flexDirection: 'row'}} key={i1}>
            {Array(7).fill(0).map((v, i2) => (
                <View key={i2} style={{flex: 1, backgroundColor: `rgb(${i1 * 14 + i2 * 2}, ${i1 * 14 + i2 * 2}, ${i1 * 14 + i2 * 2})`}}/>
            ))}
          </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    padding: 20,
  },
});
