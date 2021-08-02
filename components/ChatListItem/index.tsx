import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback, Alert } from 'react-native'
import { ChatRoom } from '../../types'
import styles from './style'
import  moment  from 'moment'
import { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Auth, API, graphqlOperation} from 'aws-amplify'

export type ChatListItemProps = {
    chatRoom: ChatRoom;
}



const ChatListItems = (props: ChatListItemProps) => {
    const { chatRoom } = props
    const [otherUser, setOtherUser] = useState(null)
 

    useEffect( () => {
        const getOtherUser = async () => {
            const userInfo = await Auth.currentAuthenticatedUser()
            if(chatRoom.chatRoomUsers.items[0].user.id === userInfo.attributes.sub){
                setOtherUser(chatRoom.chatRoomUsers.items[1].user);
            }else {
                setOtherUser(chatRoom.chatRoomUsers.items[0].user);
            }
        }
        getOtherUser();

    }, [])

    const navigation = useNavigation();

    const onClick = () => {
        navigation.navigate('ChatRoom', { 
            id: chatRoom.id,
            name: otherUser.name,
            avatar: otherUser.imageUri
        })
    }

    if(!otherUser){
        return null;
    }

   return(
    <TouchableWithoutFeedback onPress={onClick}>
       <View style={styles.container}>
           <View style={styles.leftContainer}>
             <Image source={{ uri: otherUser.imageUri }} style={styles.avatar} />
          
             <View style={styles.midContainer}>
                <Text style={styles.username}>{otherUser.name}</Text>
                <Text style={styles.lastMessage}>{chatRoom.lastMessage ? `${chatRoom.lastMessage.user.name} : ${chatRoom.lastMessage.content }` : ""}</Text>
            </View>
           </View>
           <Text style={styles.time}>
             
               {chatRoom.lastMessage && moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
               
            </Text>
       </View>
       </TouchableWithoutFeedback>
   )
}

export default ChatListItems;