import AsyncStorage from '@react-native-async-storage/async-storage';
import { Redirect, router } from 'expo-router';
import { useEffect, useState } from 'react';
import { ApiService } from '../services/apiService';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/userSlice';
import { updateLeaderboard } from '../store/slices/leaderboardSlice';
import Background from '../components/Background';
import { Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function Index() {
  const { get } = ApiService;
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const user = await AsyncStorage.getItem('user');
      let response = await get(`https://api.gameshift.dev/users/${user}`,
        { headers: { 'x-api-key': process.env.EXPO_PUBLIC_GAMESHIFT_KEY } }
      )
      console.log(response);
      if (response) {
        dispatch(setUser({ ...response, point: 11 }));
        dispatch(updateLeaderboard({ ...response, point: 11 }));
        setTimeout(() => {
          router.replace('/dashboard');
        }, 1000)
      } else {
        router.replace('/login');
      }
    })();
  }, []);
  return (
    <Background classNameData={'w-screen h-screen px-5 pt-10'}>
      <View className='w-screen h-screen flex items-center justify-center'>
        <Animatable.Text className='text-white font-bold text-5xl' animation="slideInDown" iterationCount={5} direction="alternate">GO🔥</Animatable.Text>
      </View>
    </Background>
  );
}

