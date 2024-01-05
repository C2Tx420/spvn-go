import React from 'react'
import { Image, Text, TouchableHighlight, View } from 'react-native'
import Background from '../components/Background'

export default function Dashboard() {
  return (
    <Background classNameData={'w-screen min-h-screen px-5 pt-10'}>
      <View className={'flex items-center justify-center gap-3'}>
        <View className={'bg-white w-20 h-20 rounded-full'} />
        <Text className='text-white text-xl'>username</Text>
      </View>
      <View className='mt-3 -mb-5'>
        <Image source={require('../assets/dashboard.png')} className='mx-auto' />
      </View>
      <View className='flex-row items-center justify-center gap-10'>
        <View className='flex-col justify-center items-center'>
          <Text className='text-white text-xl font-bold'>288</Text>
          <Text className='text-white text-sm'>Steps</Text>
        </View>
        <View className='flex-col justify-center items-center'>
          <Text className='text-white text-xl font-bold'>10</Text>
          <Text className='text-white text-sm'>Points</Text>
        </View>
        <View className='flex-col justify-center items-center'>
          <Text className='text-white text-xl font-bold'>#N/A</Text>
          <Text className='text-white text-sm'>Rank</Text>
        </View>
      </View>
      <View className='mt-3 px-3'>
        <Text className='text-white font-bold text-xl'>Quests</Text>
        <View className='flex-col gap-3 mt-3'>
          <View className='rounded-xl bg-white p-3 flex-row justify-between items-center'>
            <Text>
              Walk 5000 steps
            </Text>
            <TouchableHighlight className='bg-[#FEDE00] p-2 rounded-xl' style={{ filter: 'drop-shadow(0px 4px 19px rgba(0, 0, 0, 0.49))' }}>
              <Text>
                Collect
              </Text>
            </TouchableHighlight>
          </View>
          <View className='rounded-xl bg-white p-3 flex-row justify-between items-center'>
            <Text>
              Walk 10000 steps
            </Text>
            <TouchableHighlight className='bg-gray-400 p-2 rounded-xl' style={{ filter: 'drop-shadow(0px 4px 19px rgba(0, 0, 0, 0.49))' }}>
              <Text>
                Collect
              </Text>
            </TouchableHighlight>
          </View>
          <View className='rounded-xl bg-white p-3 flex-row justify-between items-center'>
            <Text>
              Walk 15000 steps
            </Text>
            <TouchableHighlight className='bg-gray-400 p-2 rounded-xl' style={{ filter: 'drop-shadow(0px 4px 19px rgba(0, 0, 0, 0.49))' }}>
              <Text>
                Collect
              </Text>
            </TouchableHighlight>
          </View>
          
        </View>
      </View>
    </Background>
  )
}
