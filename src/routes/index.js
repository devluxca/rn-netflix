import { NavigationContainer } from '@react-navigation/native'
import { UserRoutes } from './stack.routes'

export function Routes(){
    return (
        <NavigationContainer>
            <UserRoutes />
        </NavigationContainer>
    )
}