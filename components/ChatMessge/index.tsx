import moment from 'moment';
import React from 'react';
import { Text, View } from 'react-native'
import { Message } from "../../types"
import styles from '../ChatMessge/style';

export type ChatMessagePros = {
    message: Message;
    myId:String
}

const ChatMessage = (props: ChatMessagePros) => {
    const { message,  myId } = props
    const isMyMessage = () => {
        return message.user.id === myId
    }
        return(
            <View style={styles.container}>
                <View style={[
                    styles.messageBox,
                    { 
                         backgroundColor: isMyMessage() ? '#DCF8C5' : '#fff',
                         marginLeft: isMyMessage() ? 50 : 0,
                         marginRight: isMyMessage() ? 0 : 50
                    }
                ]}>

               {!isMyMessage() && <Text style={styles.name}>{ message.user.name }</Text>} 
                  <Text style={styles.message}>{message.content}</Text>
                  <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
                </View>
            </View>
          
        )
}

export default ChatMessage;