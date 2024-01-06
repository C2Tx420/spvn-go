import React, { useState } from 'react'
import { Text, TextInput, TouchableHighlight, View } from 'react-native'
import Background from '../components/Background'
import { router } from 'expo-router';
import { ApiService } from '../services/apiService';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {
  const { post } = ApiService;
  const [value, setValue] = useState('')
  const handleRegister = async () => {
    let { referenceId } = await post('https://api.gameshift.dev/users',
      {
        referenceId: '1',
        email: value
      },
      { headers: { 'x-api-key': process.env.EXPO_PUBLIC_GAMESHIFT_KEY } }
    )
    AsyncStorage.setItem('user', referenceId);
    router.replace('/dashboard');
  }
  return (
    <Background classNameData='w-screen h-screen flex-row justify-center items-center'>
      <View className='bg-[#ffffff50] rounded-xl w-2/3 p-3 m-auto'>
        <Text className='text-white font-bold text-center text-base w-full'>Sign in</Text>
        <TextInput
          className='border border-gray-400 p-3 text-white rounded-md my-3'
          placeholder='Email'
          placeholderTextColor='#FFFFFFB2'
          value={value}
          onChangeText={text => setValue(text)}
          keyboardType='email-address'
        />
        <View className="flex justify-center items-center w-full">
          <TouchableHighlight className='p-3 rounded-xl bg-green-500 w-1/2' onPress={handleRegister}>
            <Text className='text-center text-white font-bold'>Get Started!</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Background>
  )
}
