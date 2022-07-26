import React from 'react';
import { Button, Title } from 'react-native-paper'


import { BGDark, Row } from './styles';
import { Header } from '../../components/Header'
import { Hero } from '../../components/Hero'
import { VerticalButton } from '../../components/VerticalButton'
import { Previews } from '../../components/Previews'
import { Section } from '../../components/Section'
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation()

    const goMovie = () => navigation.navigate('movie')

    return (
        <BGDark>
            <Header />
            <Hero />
            <Row>
                <VerticalButton icon='plus' name='Minha lista' />
                <Button 
                    icon='play'
                    mode='contained'
                    color='#fff'
                    uppercase={false}
                >Assistir</Button>
                <VerticalButton icon='information-outline' name='Saiba mais' />
            </Row>

            <Previews />
            {[1,2,3,4].map((section, item) => (
                <Section key={item} onPress={goMovie} />
            ))}
        </BGDark>
    )
}

export default Home;