import React from 'react'

import { View } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import { ImageBackground, Logo, Top10Section, Top10 } from './styles'

const Hero = () => {
    return (
        <ImageBackground source={{ uri: 'https://i.imgur.com/EJyDFeY.jpeg' }}>
            <View>
                <Logo source={{ uri: 'https://i.imgur.com/4xN7wB8.png' }}></Logo>
            </View>
            <Top10Section>
                <Top10>Top 1 de hoje no Brasil</Top10>
            </Top10Section>
            <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.8)']} style={{ width: '100%', position: 'absolute', height: 100, zIndex: 9, bottom: 0, }} />
        </ImageBackground>
    )
}

export { Hero }