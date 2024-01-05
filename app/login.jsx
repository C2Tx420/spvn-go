import React from 'react'
import { Text, TextInput, TouchableHighlight, View } from 'react-native'
import Background from '../components/Background'
import { router } from 'expo-router';

export default function Login() {
  const handleRegister = () => {
    router.replace('/dashboard');
  }
  return (
    <Background classNameData='w-screen h-screen flex-row justify-center items-center'>
      <View className='bg-[#ffffff50] rounded-xl w-2/3 p-3 m-auto'>
        <Text className='text-white font-bold text-center text-base w-full'>Sign in</Text>
        <TextInput className='border border-gray-400 p-3 text-white rounded-md my-3' placeholder='Email' placeholderTextColor='#FFFFFFB2' />
        <View className="flex justify-center items-center w-full">
          <TouchableHighlight className='p-3 rounded-xl bg-green-500 w-1/2' onPress={handleRegister}>
            <Text className='text-center text-white font-bold'>Get Started!</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Background>
  )
}
