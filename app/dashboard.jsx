import React from 'react'
import { Image, Text, View } from 'react-native'
import Background from '../components/Background'

export default function Dashboard() {
  return (
    <Background classNameData={'w-screen h-screen p-5'}>
      <View className={'flex items-center justify-center gap-3'}>
        <View className={'bg-white w-20 h-20 rounded-full'} />
        <Text className='text-white'>username</Text>
      </View>
      <View className='bg-black h-full w-full my-5'>
        <Image source={require('../assets/dashboard.png')} className='mx-auto' />
      </View>
    </Background>
  )
}
