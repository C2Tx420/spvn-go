import React from 'react'
import { Text, View } from 'react-native'

export default function Background({classNameData ,children}) {
  return (
    <View className={classNameData} style={{backgroundColor: '#020239'}}>
        {children}
    </View>
  )
}
