import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from '../pages/Login'
import Home from '../pages/Home'
import Movie from '../pages/Movie'

const { Screen, Navigator } = createNativeStackNavigator()

export function UserRoutes() {
    return (
        <Navigator>
            <Screen 
                name='login'
                component={Login}
                options={{
                    headerShown: false
                }}
            />
            <Screen 
                name='home'
                component={Home}
                options={{
                    headerShown: false
                }}
            />
            <Screen 
                name='movie'
                component={Movie}
                options={{
                    headerShown: false
                }}
            />
        </Navigator>
    )
}