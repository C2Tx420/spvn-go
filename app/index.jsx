import AsyncStorage from '@react-native-async-storage/async-storage';
import { Redirect, router } from 'expo-router';
import { useEffect, useState } from 'react';
import { ApiService } from '../services/apiService';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/userSlice';

export default function Index() {
  const {get} = ApiService;
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const user = await AsyncStorage.getItem('user');
      let response = await get(`https://api.gameshift.dev/users/${user}`,
      { headers: { 'x-api-key': process.env.EXPO_PUBLIC_GAMESHIFT_KEY } }
    )
      if (response) {
        dispatch(setUser(response));
        router.replace('/dashboard');
      } else {
        router.replace('/login');
      }
    })();
  }, []);
  return (
    <>
    </>
  );
}

