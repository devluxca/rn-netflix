import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-paper'

import { BGDark, Banner, Title, Main, TextWhite, Caption, Actions } from './styles'
import { VerticalButton } from '../../components/VerticalButton'
import { Section } from '../../components/Section'

const Movie = () => {
    const [mtype, setType] = useState('movie')

    return (
        <BGDark>
            <Banner
                source={{ uri: 'https://i.imgur.com/EJyDFeY.jpeg' }}
            />
            <Main>
                <Title>Nome do filme</Title>
                <Button icon='play' mode='contained' color='#fff' uppercase={false}>
                    Assistir
                </Button>
                <TextWhite>Pregadores Profanos. Autoridades Corruptas. Amantes Assasinos. Numa cidade cheia de pecadores, um jovem busca justica.</TextWhite>
                <Caption>Elenco: Silvio Sampaio, Caroline Paiva, Omar Sampaio, Mikael Lópes. Generos: Acão, Aventura, Dramático.</Caption>
            </Main>

            <Actions>
                <VerticalButton name='Minha lista' icon='plus' />
                <VerticalButton name='Classifique' icon='thumb-up' />
                <VerticalButton name='Compartilhe' icon='send' />
                <VerticalButton name='Baixar' icon='download' />
            </Actions>

            {mtype === 'movie' && <View style={{ marginTop: 20 }}>
                <Section hasTop />
                <Section />
            </View>}
            {mtype === 'serie' && <View>
                <TextWhite>Serie</TextWhite>  
            </View>}
        </BGDark>
    )
}

export default Movie