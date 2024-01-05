import { Slot, Stack } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
import NavBar from '../components/NavBar'
import { Provider } from 'react-redux'
import { store } from '../store/store'

export default function RootLayout() {
  return (
    <Provider store={store}>
      <View>
        <Slot />
        <NavBar />
      </View>
    </Provider>
  )
}
