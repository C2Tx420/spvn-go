import { Slot, usePathname } from 'expo-router'
import React from 'react'
import { View } from 'react-native'
import NavBar from '../components/NavBar'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export default function RootLayout() {
  const pathname = usePathname();
  const hideNavbar = ['/', '/login']
  return (
    <Provider store={store}>
      <View>
        <Slot />
        {!hideNavbar.find(path => path === pathname) &&
          <NavBar />
        }
      </View>
    </Provider>
  )
}
