import React, { useRef } from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import Background from '../components/Background'
import ConfettiCannon from 'react-native-confetti-cannon';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { collectQuest } from '../store/slices/questSlice';
import { SvgUri } from 'react-native-svg';
import { createAvatar, getRank } from '../lib/utils';
import { setUser } from '../store/slices/userSlice';

export default function Dashboard() {
  let canonRef;
  const user = useSelector((state) => state.user);
  const quest = useSelector((state) => state.quest);
  const leaderboard = useSelector((state) => state.leaderboard);
  const dispatch = useDispatch();
  const step = 5001
  return (
    <Background classNameData={'w-screen min-h-screen px-5 pt-10'}>
      <View className={'flex items-center justify-center gap-3'}>
        <View className={'bg-white w-20 h-20 rounded-full'} >
          <SvgUri
            width="100%"
            height="100%"
            uri={createAvatar(user.address)}
          />
        </View>
        <Text className='text-white text-xl w-40 font-semibold' numberOfLines={1}>{user.email}</Text>
      </View>
      <View className='mt-3 -mb-5'>
        <Image source={require('../assets/dashboard.png')} className='mx-auto' />
      </View>
      <View className='flex-row items-center justify-center gap-10'>
        <View className='flex-col justify-center items-center'>
          <Text className='text-white text-xl font-bold'>{step}</Text>
          <Text className='text-white text-sm'>Steps</Text>
        </View>
        <View className='flex-col justify-center items-center'>
          <Text className='text-white text-xl font-bold'>{user.point}</Text>
          <Text className='text-white text-sm'>Points</Text>
        </View>
        <View className='flex-col justify-center items-center'>
          <Text className='text-white text-xl font-bold'>{getRank(leaderboard, user.email)}</Text>
          <Text className='text-white text-sm'>Rank</Text>
        </View>
      </View>
      <View className='mt-3 px-3'>
        <Text className='text-white font-bold text-xl'>Quests</Text>
        <View className='flex-col gap-3 mt-3'>
          {quest.map((quest, idx) =>
            <View key={idx}>
              {quest.type === 'pending' &&
                <View className='rounded-xl bg-white p-3 flex-row justify-between items-center'>
                  <Text>
                    {quest.name}
                  </Text>
                  <Pressable
                    className={`${step >= quest.require ? 'bg-[#FEDE00]' : 'bg-gray-400'} p-2 rounded-xl`}
                    style={{ filter: 'drop-shadow(0px 4px 19px rgba(0, 0, 0, 0.49))' }}
                    disabled={step <= quest.require}
                    onPress={() => {
                      dispatch(collectQuest(quest.id));
                      dispatch(setUser({ ...user, point: Number(user.point) + Number(quest.point) }))
                      canonRef.start();
                    }}
                  >
                    <Text>
                      Collect
                    </Text>
                  </Pressable>
                </View>
              }
            </View>
          )}
        </View>
      </View>
      <ConfettiCannon
        count={200}
        origin={{ x: -1000, y: 0 }}
        autoStart={false}
        fadeOut
        ref={ref => (canonRef = ref)}
      />
    </Background>
  )
}
