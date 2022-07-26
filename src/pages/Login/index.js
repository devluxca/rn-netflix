import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

import { BGDark, Image , Container, Small} from './styles'

const Login = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' })
    const navigation = useNavigation()

    const goHome = () => navigation.navigate('home')

    return (
        <BGDark>
            <Image source={require('../../../assets/logo.png')} />
            <Container>
                <TextInput mode="flat" style={{ marginBottom: 20 }} label="Email ou número de telefone" onChangeText={(text) => setCredentials({...credentials, email: text})} />
                <TextInput mode="flat" label="Senha" secureTextEntry={true} onChangeText={(text) => setCredentials({...credentials, password: text})} />

                <Button mode="contained" style={{ marginTop: 20 }} onPress={goHome}>Entrar</Button>
                <Button style={{ marginTop: 20 }}>Recuperar senha</Button>

                <Small>Você está protegido pelo Captcha!</Small>
            </Container>
        </BGDark>
    )
}

export default Login;