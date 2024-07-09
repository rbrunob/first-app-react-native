import { View, Text, Image } from 'react-native'
import React from 'react'
import { images } from '@/constants'
import Button from './Button'
import { router } from 'expo-router'

type EmptyStateTypeProps = {
    title: string
    subtitle: string
}

const EmptyState = ({ title, subtitle }: EmptyStateTypeProps) => {
    return (
        <View className='justify-center items-center px-4'>
            <Image
                source={images.empty}
                className='w-[270px] h-[215px]'
                resizeMode='contain'
            />

            <Text className='font-pmedium text-sm text-gray-100'>{subtitle}</Text>
            <Text className='font-psemibold text-2xl text-white mt-2'>{title}</Text>
        
            <Button
                title="Create Video"
                handlePress={() => router.push('/create')}
                containerStyles="w-full my-5"
            />
        </View>
    )
}

export default EmptyState