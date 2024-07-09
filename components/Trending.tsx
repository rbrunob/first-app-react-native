import { View, Text, FlatList } from 'react-native'
import React from 'react'

interface Post {
    id: string
}

type TrendingPropsType = {
    posts: Array<Post>
}

const Trending = ({ posts }: TrendingPropsType) => {
    return (
        <FlatList
            data={posts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <Text className='text-3xl text-white'>{item.id}</Text>
            )}
            horizontal
        />
    )
}


export default Trending