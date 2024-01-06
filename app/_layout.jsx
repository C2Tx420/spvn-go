import { Slot, usePathname } from 'expo-router'
import React from 'react'
import { View } from 'react-native'
import NavBar from '../components/NavBar'
import { Provider } from 'react-redux'
import { store } from '../store/store'

export default function RootLayout() {
  const pathname = usePathname();
  return (
    <Provider store={store}>
      <View>
        <Slot />
        {!/^(\/(?!$|login$)|[^/]+)$/i.test(pathname) &&
          <NavBar />
        }
      </View>
    </Provider>
  )
}
