import React from 'react'
import { Text, View } from 'react-native'

export default function NavBar() {
    return (
        <View
            className='absolute bottom-2 self-center bg-gray-500 z-50 rounded-full p-2 px-5'
        >
            <View className='flex-row items-center gap-5 w-full'>
                <Text>Home</Text>
                <Text>Home</Text>
                <Text>Home</Text>
            </View>
        </View>
    )
}
