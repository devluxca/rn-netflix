import React from 'react'

import { TouchableOpacity, } from 'react-native'
import { Container, Title, FlatListContainer, Banner, Logo, BorderTop  } from './styles'

const Section = ({ hasTop, onPress }) => {
    return (
        <Container>
            {hasTop && <BorderTop />}
            <Title style={{ marginLeft: 20 }}>Section</Title>
            <FlatListContainer
                horizontal
                data={[1,2,3,4,5]}
                renderItem={({ item, index}) => (
                    <TouchableOpacity key={index} style={{ marginRight: 10, marginLeft: index === 0 ? 20 : 0 }} onPress={onPress}>
                        <Banner
                            imageStyle={{ borderRadius: 4 }}
                            source={{ uri: 'https://i.imgur.com/EJyDFeY.jpeg' }}
                        >
                            <Logo source={{ uri: 'https://i.imgur.com/4xN7wB8.png' }} />
                        </Banner>
                    </TouchableOpacity>
                )}
            />
        </Container>
    )
}

export { Section }