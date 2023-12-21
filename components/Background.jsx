import React from 'react'
import { Image, Text, View } from 'react-native'
import SkyBg from './asset/SkyBg'

export default function Background({ classNameData, children }) {
  return (
    <View className={classNameData} style={{ backgroundColor: '#020239', position: 'relative' }}>
      <SkyBg className='absolute top-0 bottom-0 left-0 right-0' />
      {children}
    </View>
  )
}
