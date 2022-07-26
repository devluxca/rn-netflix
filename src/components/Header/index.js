import React from 'react';
import {LinearGradient} from 'expo-linear-gradient'
import { TouchableOpacity, View } from 'react-native';

import { SafeAreaContainer, TextLink, LogoSmall } from './styles';

const Header = () => {
    return (
        <LinearGradient
            colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0)']}
            style={{
                position: 'absolute',
                top: 0,
                zIndex: 999,
            }}
        >
            <SafeAreaContainer>
                <View>
                    <LogoSmall source={require('../../../assets/logo-small.png')} />
                </View>
                <TouchableOpacity>
                    <TextLink>Séries</TextLink>
                </TouchableOpacity>
                <TouchableOpacity>
                    <TextLink>Filmes</TextLink>
                </TouchableOpacity>
                <TouchableOpacity>
                    <TextLink>Minha lista</TextLink>
                </TouchableOpacity>
            </SafeAreaContainer>
        </LinearGradient>
    )
}

export { Header };