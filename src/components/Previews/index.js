import {LinearGradient} from 'expo-linear-gradient'
import { View, TouchableOpacity } from 'react-native'
import { Title } from 'react-native-paper'

import { FlatListContainer, Oval, Banner, Logo } from './styles'

const Previews = () => {
    return (
        <View style={{ marginBottom: 30 }}>
            <Title style={{ color: '#fff', marginLeft: 25, marginTop: 35, }}>Prévias</Title>
            <FlatListContainer
                horizontal
                data={[1,2,3,4,5,6]}
                renderItem={({ item, index }) => (
                    <TouchableOpacity key={index} style={{ marginLeft: index === 0 ? 20 : 0, marginRight: 10}}>
                        <Oval>
                            <Banner source={{ uri: 'https://i.imgur.com/EJyDFeY.jpeg' }} />
                            <Logo source={{ uri: 'https://i.imgur.com/4xN7wB8.png' }} />

                            <LinearGradient 
                                colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} 
                                style={{ width: '100%', height: 60, position: 'absolute', zIndex: 9, bottom: 0 }} 
                            />
                        </Oval>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export { Previews }