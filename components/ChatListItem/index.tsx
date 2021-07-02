import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback, Alert } from 'react-native'
import { ChatRoom } from '../../types'
import styles from './style'
import  moment  from 'moment'
import { useNavigation } from '@react-navigation/native'

export type ChatListItemProps = {
    chatRoom: ChatRoom;
}



const ChatListItems = (props: ChatListItemProps) => {
    const { chatRoom } = props
    const user = chatRoom.users[1];

    const navigation = useNavigation();

    const onClick = () => {
        navigation.navigate('ChatRoom', { 
            id: chatRoom.id,
            name: user.name,
            avatar: user.imageUri
        })
    }


   return(
    <TouchableWithoutFeedback onPress={onClick}>
       <View style={styles.container}>
           <View style={styles.leftContainer}>
             <Image source={{ uri: user.imageUri }} style={styles.avatar} />
          
             <View style={styles.midContainer}>
                <Text style={styles.username}>{user.name}</Text>
                <Text style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
            </View>
           </View>
           <Text style={styles.time}>
               {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
               
            </Text>
       </View>
       </TouchableWithoutFeedback>
   )
}

export default ChatListItems;