import React, { useState } from 'react'
import { Image, Linking, Pressable, Text, View } from 'react-native'
import Background from '../components/Background'
import { mainCl } from '../constant/style';
import { useSelector } from 'react-redux';
import { ApiService } from '../services/apiService';
import { getSOLtoUSD } from '../lib/utils';

export default function award() {
    const { post } = ApiService;
    const user = useSelector((state) => state.user);
    const leaderboard = useSelector((state) => state.leaderboard);
    const [currentView, setCurrentView] = useState('basic');
    const handleCheckout = async () => {
        const { url } = await post(
            `https://api.gameshift.dev/asset-templates/${process.env.EXPO_PUBLIC_PREMIUM_TICKET}/checkout`,
            {
                amountCents: Number(await getSOLtoUSD()) * 1000,
                quantity: 1,
                buyerId: user.referenceId
            },
            { headers: { 'x-api-key': process.env.EXPO_PUBLIC_GAMESHIFT_KEY } }
        )
        Linking.openURL(url);
    }
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
                    <View className={`rounded-xl bg-white p-3 flex-row items-center ${user.email === leaderboard[0].email && 'bg-yellow-100'}`}>
                        <Image source={require('../assets/1st.png')} className='w-10 h-10 object-center object-cover mr-3' />
                        <View>
                            <Text className='text-base font-semibold w-28' numberOfLines={1}>
                                {leaderboard[0].email}
                            </Text>
                            <Text className='text-xs opacity-70'>
                                {leaderboard[0].point} Points
                            </Text>
                        </View>
                        <View className='rounded-full ml-auto flex-row'>
                            {/* <Text className={`text-sm text-orange-400 font-semibold`}>
                                100 USD
                            </Text> */}
                            <Text>
                                🔥🔥🔥
                            </Text>
                        </View>
                    </View>
                    <View className={`rounded-xl bg-white p-3 flex-row items-center ${user.email === leaderboard[1].email && 'bg-yellow-100'}`}>
                        <Image source={require('../assets/2nd.png')} className='w-10 h-10 object-center object-cover mr-3' />
                        <View>
                            <Text className='text-base font-semibold w-28' numberOfLines={1}>
                                {leaderboard[1].email}
                            </Text>
                            <Text className='text-xs opacity-70'>
                                {leaderboard[1].point} Points
                            </Text>
                        </View>
                        <View className='rounded-full ml-auto flex-row'>
                            {/* <Text className={`text-sm text-orange-400 font-semibold`}>
                                100 USD
                            </Text> */}
                            <Text>
                                🔥🔥
                            </Text>
                        </View>
                    </View>
                    <View className={`rounded-xl bg-white p-3 flex-row items-center ${user.email === leaderboard[2].email && 'bg-yellow-100'}`}>
                        <Image source={require('../assets/3rd.png')} className='w-10 h-10 object-center object-cover mr-3' />
                        <View>
                            <Text className='text-base font-semibold w-28' numberOfLines={1}>
                                {leaderboard[2].email}
                            </Text>
                            <Text className='text-xs opacity-70'>
                                {leaderboard[3].point} Points
                            </Text>
                        </View>
                        <View className='rounded-full ml-auto flex-row'>
                            {/* <Text className={`text-sm text-orange-400 font-semibold`}>
                                100 USD
                            </Text> */}
                            <Text>
                                🔥
                            </Text>
                        </View>
                    </View>
                </View>
                <View className='-mt-3 px-5 w-60 rounded-full mx-auto bg-white'>
                    <Text className='text-xs text-gray-500 leading-3 py-1' numberOfLines={1}>
                        This rank will be reset every month
                    </Text>
                </View>
            </Background>
            <View className='p-5 pt-5 flex-col gap-5'>
                {leaderboard.slice(3, 7).map((player, idx) =>
                    <View className={`rounded-xl bg-white p-3 flex-row items-center ${user.email === player.email && 'bg-yellow-100'}`} key={idx}>
                        <View className='mr-3 border rounded-full w-8 h-8 flex items-center justify-center'>
                            <Text className='font-semibold'>{idx + 4}</Text>
                        </View>
                        <View>
                            <Text className='text-base font-semibold w-28' numberOfLines={1}>
                                {player.email}
                            </Text>
                            <Text className='text-xs opacity-70'>
                                {player.point} Points
                            </Text>
                        </View>
                    </View>
                )}
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
                            to get more Prize
                        </Text>
                        <Pressable
                            className='bg-[#FEDE00] px-20 py-3 rounded-full my-3'
                            style={{ filter: 'drop-shadow(0px 4px 19px rgba(0, 0, 0, 0.49))' }}
                            onPress={handleCheckout}
                        >
                            <Text className='text-[#000000] font-semibold text-xl'>
                                Join with 0.1 SOL
                            </Text>
                        </Pressable>
                        <Text className='text-white font-bold text-3xl text-center'>
                            Current Prize: 1.5 SOL🔥
                        </Text>
                    </View>
                </View>}
        </View>
    )
}
