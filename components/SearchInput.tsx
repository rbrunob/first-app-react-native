import { View, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import { icons } from '../constants'

const SearchInput = () => {
    return (
        <View className='justify-center border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row space-x-4'>
            <TextInput
                className='text-base text-white flex-1 font-pregular'
                placeholder="Search for a video topic"
                placeholderTextColor="#7b7b8b"
            />
            <TouchableOpacity>
                <Image 
                    source={icons.search}
                    className='w-5 h-5'
                    resizeMode='contain'
                />
            </TouchableOpacity>
        </View>
    )
}

export default SearchInput