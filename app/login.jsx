import React from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'
import Background from '../components/Background'

export default function Login() {
  return (
    <Background classNameData='w-screen h-screen flex justify-center items-center'>
      <View className='bg-[#ffffff50] p-3 rounded-xl w-2/3 flex flex-col gap-3'>
        <Text className='text-white font-bold text-center text-base w-full'>Sign in</Text>
        <TextInput className='border text-white rounded-md' placeholder='Email' />
        <View className="flex justify-center items-center w-full">
          <Pressable className='p-3 rounded-xl bg-green-500 w-1/2'>
            <Text className='text-center text-white font-bold'>Get Started!</Text>
          </Pressable>
        </View>
      </View>
    </Background>
  )
}
