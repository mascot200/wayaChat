import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from '../InputBox/style'
import { useState, useEffect } from 'react'
import { MaterialCommunityIcons,MaterialIcons, FontAwesome5, Entypo, Fontisto } from '@expo/vector-icons'
import { API, Auth, graphqlOperation, input } from 'aws-amplify'
import { createMessage } from '../../src/graphql/mutations';
import { messagesByChatRoom} from '../../src/graphql/queries'
const InputBox = (props) => {
    const { chatRoomID } = props
    const [ message, setMessage ] = useState("");
    const [myUserId, setMyUserId] = useState()
    useEffect( () => {
        const fetchUser = async () => {
            const userInfo = await Auth.currentAuthenticatedUser()
            setMyUserId(userInfo.attributes.sub)
        }
        fetchUser();
    }, [])

    const onSendPressonMicrophonePress = () => {
        console.log('recording.....')
    }

    const onSendPress =  async () => {
        try {
            await API.graphql(
                graphqlOperation(
                    createMessage,
                    { 
                        input: {
                            content: message,
                            userID: myUserId,
                            chatRoomID: chatRoomID
                        }
                    }
                    
                )
            )
        } catch (error) {
            
        }

    }
    const  onPress = () => {
       if (!message) {
           onSendPressonMicrophonePress();
       }else{
           onSendPress();
       }
    }

    return(
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name="laugh-beam" size={24} color={'grey'} />
                <TextInput
                 style={styles.textInput}
                  multiline={true}
                  value={message}
                  onChangeText={setMessage}
                   />
                <Entypo name="attachment" style={styles.icon} size={24} color={'grey'} />
                <Fontisto name="camera" style={styles.icon} size={24} color={'grey'} />
            </View>
            <TouchableOpacity onPress={onPress}>
            <View style={styles.buttonContainer}>
                {!message 
                 ?  <MaterialCommunityIcons name="microphone" size={24} color={'white'} />
                 :  <MaterialIcons name="send" size={24} color={'white'} />
                }
               
            </View>
            </TouchableOpacity>
            
        </View>
    )
}

export default InputBox;


