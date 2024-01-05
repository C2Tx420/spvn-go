import React, { useState } from 'react'
import { Pressable, SafeAreaView, Text, View } from 'react-native'
import Background from '../components/Background'
import { mainCl } from '../constant/style';

export default function award() {
    const [currentView, setCurrentView] = useState('basic');
    return (
        <View className={'h-screen bg-[#F2F2F2]'}>
            <Background classNameData='w-screen h-1/2 rounded-b-3xl pt-10'>
                <View className='flex-row justify-center gap-5'>
                    <Pressable onPress={() => setCurrentView('basic')}>
                        <Text className={`text-white text-xl font-semibold`}>Basic</Text>
                        {currentView === 'basic' && <View className={`h-0.5 w-full bg-[${mainCl}]`} />}
                    </Pressable>
                    <Pressable onPress={() => setCurrentView('premium')}>
                        <Text className={`text-white text-xl font-semibold`}>Premium</Text>
                        {currentView === 'premium' && <View className={`h-0.5 w-full bg-[${mainCl}]`} />}
                    </Pressable>
                </View>
                <View className='p-10 flex-col gap-5'>
                    <View className='rounded-xl bg-white p-3 flex-row justify-between items-center'>
                        <Text>
                            Walk 5000 steps
                        </Text>
                    </View>
                    <View className='rounded-xl bg-white p-3 flex-row justify-between items-center'>
                        <Text>
                            Walk 5000 steps
                        </Text>
                    </View>
                    <View className='rounded-xl bg-white p-3 flex-row justify-between items-center'>
                        <Text>
                            Walk 5000 steps
                        </Text>
                    </View>
                </View>
            </Background>
        </View>
    )
}
