import React, { useState } from 'react'
import { Image, Pressable, SafeAreaView, Text, TouchableHighlight, View } from 'react-native'
import Background from '../components/Background'
import { mainCl } from '../constant/style';
import SkyBg from '../components/asset/SkyBg';

export default function award() {
    const [currentView, setCurrentView] = useState('basic');
    return (
        <View className={'h-screen bg-[#F2F2F2]'}>
            <Background classNameData='w-screen h-1/2 rounded-b-3xl pt-10 relative'>
                <View className='flex-row justify-center gap-5 z-20'>
                    <Pressable onPress={() => setCurrentView('basic')}>
                        <Text className={`text-white text-xl font-semibold`}>Basic</Text>
                        {currentView === 'basic' && <View className={`h-0.5 w-full bg-[${mainCl}]`} />}
                    </Pressable>
                    <Pressable onPress={() => setCurrentView('premium')}>
                        <Text className={`text-white text-xl font-semibold`}>Premium</Text>
                        {currentView === 'premium' && <View className={`h-0.5 w-full bg-[${mainCl}]`} />}
                    </Pressable>
                </View>
                <View className='p-5 pt-16 flex-col gap-5'>
                    <View className='rounded-xl bg-white p-3 flex-row items-center'>
                        <Image source={require('../assets/1st.png')} className='w-10 h-10 object-center object-cover mr-3' />
                        <View>
                            <Text className='text-base font-semibold'>
                                userName
                            </Text>
                            <Text className='text-xs opacity-70'>
                                100 Points
                            </Text>
                        </View>
                        <View className='rounded-full ml-auto flex-row'>
                            <Text className={`text-sm text-orange-400 font-semibold`}>
                                100 USD
                            </Text>
                            <Text>
                                🔥
                            </Text>
                        </View>
                    </View>
                    <View className='rounded-xl bg-white p-3 flex-row items-center'>
                        <Image source={require('../assets/2nd.png')} className='w-10 h-10 object-center object-cover mr-3' />
                        <View>
                            <Text className='text-base font-semibold'>
                                userName
                            </Text>
                            <Text className='text-xs opacity-70'>
                                100 Points
                            </Text>
                        </View>
                        <View className='rounded-full ml-auto flex-row'>
                            <Text className={`text-sm text-orange-400 font-semibold`}>
                                100 USD
                            </Text>
                            <Text>
                                🔥
                            </Text>
                        </View>
                    </View>
                    <View className='rounded-xl bg-white p-3 flex-row items-center'>
                        <Image source={require('../assets/3rd.png')} className='w-10 h-10 object-center object-cover mr-3' />
                        <View>
                            <Text className='text-base font-semibold'>
                                userName
                            </Text>
                            <Text className='text-xs opacity-70'>
                                100 Points
                            </Text>
                        </View>
                        <View className='rounded-full ml-auto flex-row'>
                            <Text className={`text-sm text-orange-400 font-semibold`}>
                                100 USD
                            </Text>
                            <Text>
                                🔥
                            </Text>
                        </View>
                    </View>
                </View>
            </Background>
            <View className='p-5 pt-5 flex-col gap-5'>
                <View className='rounded-xl bg-white p-3 flex-row items-center'>
                    <View className='mr-3 border rounded-full w-8 h-8 flex items-center justify-center'>
                        <Text className='font-semibold'>4</Text>
                    </View>
                    <View>
                        <Text className='text-base font-semibold'>
                            userName
                        </Text>
                        <Text className='text-xs opacity-70'>
                            100 Points
                        </Text>
                    </View>
                </View>
                <View className='rounded-xl bg-white p-3 flex-row items-center'>
                    <View className='mr-3 border rounded-full w-8 h-8 flex items-center justify-center'>
                        <Text className='font-semibold'>5</Text>
                    </View>
                    <View>
                        <Text className='text-base font-semibold'>
                            userName
                        </Text>
                        <Text className='text-xs opacity-70'>
                            100 Points
                        </Text>
                    </View>
                </View>
                <View className='rounded-xl bg-white p-3 flex-row items-center'>
                    <View className='mr-3 border rounded-full w-8 h-8 flex items-center justify-center'>
                        <Text className='font-semibold'>5</Text>
                    </View>
                    <View>
                        <Text className='text-base font-semibold'>
                            userName
                        </Text>
                        <Text className='text-xs opacity-70'>
                            100 Points
                        </Text>
                    </View>
                </View>
                <View className='rounded-xl bg-white p-3 flex-row items-center'>
                    <View className='mr-3 border rounded-full w-8 h-8 flex items-center justify-center'>
                        <Text className='font-semibold'>7</Text>
                    </View>
                    <View>
                        <Text className='text-base font-semibold'>
                            userName
                        </Text>
                        <Text className='text-xs opacity-70'>
                            100 Points
                        </Text>
                    </View>
                </View>
            </View>
            {currentView === 'premium' &&
                <View className='absolute w-full h-full z-10 bg-[#747373f5]'>
                    <View className='flex-row justify-center gap-5 z-20 pt-12'>
                        <Pressable onPress={() => setCurrentView('basic')}>
                            <Text className={`text-white text-xl font-semibold`}>Basic</Text>
                            {currentView === 'basic' && <View className={`h-0.5 w-full bg-[${mainCl}]`} />}
                        </Pressable>
                        <Pressable onPress={() => setCurrentView('premium')}>
                            <Text className={`text-white text-xl font-semibold`}>Premium</Text>
                            {currentView === 'premium' && <View className={`h-0.5 w-full bg-[${mainCl}]`} />}
                        </Pressable>
                    </View>
                    <View className='w-full h-full flex items-center justify-center -mt-20'>
                        <Text className='text-white font-bold text-3xl text-center'>
                            Join Premium
                        </Text>
                        <Text className='text-white font-bold text-3xl text-center'>
                            to get more Prize 🔥
                        </Text>
                        <TouchableHighlight className='bg-[#FEDE00] px-20 py-3 rounded-full mt-3' style={{ filter: 'drop-shadow(0px 4px 19px rgba(0, 0, 0, 0.49))' }}>
                            <Text className='text-[#000000] font-semibold text-xl'>
                                Join with 10$
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>}
        </View>
    )
}
