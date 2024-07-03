import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

type ButtonPropsTypes = {
    title: String,
    handlePress: () => void,
    containerStyles: String,
    textStyles?: String,
    isLoading?: Boolean
}

const Button = ({ title, handlePress, containerStyles, textStyles, isLoading }: ButtonPropsTypes) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center 
                ${containerStyles} 
                ${isLoading ? 'opacity-50' : ''}`
            }
        >
            <Text className={`text-primary font-psemibold ${textStyles}`}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default Button