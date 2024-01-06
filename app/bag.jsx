import React, { useEffect, useState } from 'react'
import Background from '../components/Background'
import { Image, Pressable, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { ApiService } from '../services/apiService'
import Withdraw from '../components/Withdraw'

export default function bag() {
    const { get } = ApiService;
    const user = useSelector((state) => state.user);
    const [inventory, setInventory] = useState([]);
    useEffect(() => {
        (async () => {
            let { data } = await get(`https://api.gameshift.dev/users/${user.referenceId}/assets`,
                { headers: { 'x-api-key': process.env.EXPO_PUBLIC_GAMESHIFT_KEY } }
            )
            setInventory(data);
        })();
    }, [])
    return (
        <Background classNameData='w-screen h-screen'>
            <Text className='text-white text-center font-semibold text-3xl'>
                Inventory
            </Text>
            <View className='p-5'>
                {inventory.map((item, idx) =>
                    <View className='p-5 bg-white rounded-xl flex-row items-center justify-between' key={idx}>
                        <View className='flex-row items-center gap-3'>
                            <Image
                                className='w-14 h-14 bg-transparent'
                                source={{ uri: item.imageUrl }}
                            />
                            <Text className='font-semibold'>{item.name}</Text>
                        </View>
                        <Withdraw />
                    </View>
                )}
            </View>
        </Background>
    )
}
