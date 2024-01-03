import { Slot, Stack } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
import NavBar from '../components/NavBar'

export default function RootLayout() {
  return (
    <View>
        <Slot/>
        <NavBar/>
    </View>
  )
}
