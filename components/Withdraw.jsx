import React, { useState } from 'react'
import { Linking, Modal, Pressable, Text, TextInput, View } from 'react-native'
import { ApiService } from '../services/apiService';
import { useSelector } from 'react-redux';

export default function Withdraw(item) {
    const { post } = ApiService;
    const user = useSelector((state) => state.user);
    const [isShow, setIsShow] = useState(false);
    const [value, setValue] = useState('')
    const handleWithdraw = async () => {
        const url = await post(
            `https://api.gameshift.dev/assets/${item.item.id}/transfer`,
            {
                onBehalfOf: user.referenceId,
                destinationWallet: value
            },
            { headers: { 'x-api-key': process.env.EXPO_PUBLIC_GAMESHIFT_KEY } }
        )
        Linking.openURL(url);
        setIsShow(false)
    }
    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isShow}
            >
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(255,255,255,0.5)',
                    marginTop: 22,
                }}>
                    <View style={{
                        margin: 20,
                        width: '80%',
                        backgroundColor: 'white',
                        borderRadius: 20,
                        padding: 20,
                        alignItems: 'center',
                        shadowColor: '#000',
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        }
                    }} >
                        <Text className='font-semibold'>Withdraw Prize</Text>
                        <TextInput
                            className='border border-gray-400 p-3 rounded-md my-3 w-full'
                            placeholder='address'
                            placeholderTextColor='#ccc'
                            value={value}
                            onChangeText={text => setValue(text)}
                        />
                        <Pressable
                            className={`bg-[#FEDE00] p-2 px-5 rounded-xl`}
                            style={{ filter: 'drop-shadow(0px 4px 19px rgba(0, 0, 0, 0.49))' }}
                            onPress={handleWithdraw}
                        >
                            <Text>
                                Confirm
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </Modal >
            <Pressable
                className={`bg-[#FEDE00] p-2 rounded-xl`}
                style={{ filter: 'drop-shadow(0px 4px 19px rgba(0, 0, 0, 0.49))' }}
                onPress={() => setIsShow(true)}
            >
                <Text>
                    Withdraw
                </Text>
            </Pressable>
        </>
    )
}
