import { useState} from 'react';
import  React  from 'react';
import { View, TouchableOpacity } from 'react-native'

const [ isVisible, setVisibility ] = useState(false)

const Friends = () => {

    const onclick = () => {

    }

    const hideButton = () => {

    }

    return (
        <View>
            <TouchableOpacity onPress={onclick}>

            </TouchableOpacity>

        </View>
    )
}

export default Friends

