import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
} from 'react-native'
import { useEffect, useRef, useState } from 'react'

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>hi, i'm home</Text>
      <Button
        title="Go to Upload"
        onPress={() => navigation.navigate('Upload')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
