
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { IconButton, TextWhite } from './styles'

const VerticalButton = ({ name, icon }) => {
    return (
        <IconButton>
            <Icon name={icon} color='#fff' size={20} />
            <TextWhite>{name}</TextWhite>
        </IconButton> 
    )
}

export { VerticalButton }