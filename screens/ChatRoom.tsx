import React from 'react';
import { View, Text } from 'react-native'
import { useRoute } from '@react-navigation/native'

const ChatRoomScreen = () => {
    const route = useRoute();
    return (
        <View>
            <Text>Hello is me</Text>
        </View>
    )
}

export default  ChatRoomScreen;