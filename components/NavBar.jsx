import { faBriefcase, faGift, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { usePathname, useRouter } from 'expo-router';
import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { mainCl } from '../constant/style';

export default function NavBar() {
    const pathname = usePathname();
    const router = useRouter();
    return (
        <View
            className='absolute bottom-5 self-center bg-[#49494969] z-50 rounded-2xl border border-[#ffffff25] p-2 px-6'
        >
            <View className='flex-row items-center gap-10 w-full'>
                <Pressable onPress={() => { router.replace('/dashboard') }}>
                    <FontAwesomeIcon icon={faHome} size={28} color={pathname === '/dashboard' ? mainCl : '#909090'} />
                </Pressable>
                <Pressable onPress={() => { router.replace('/award') }}>
                    <FontAwesomeIcon icon={faGift} size={28} color={pathname === '/award' ? mainCl : '#909090'} />
                </Pressable>
                <Pressable onPress={() => { router.replace('/bag') }}>
                    <FontAwesomeIcon icon={faBriefcase} size={28} color={pathname === '/bag' ? mainCl : '#909090'} />
                </Pressable>
            </View>
        </View>
    )
}
