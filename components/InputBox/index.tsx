import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from '../InputBox/style'
import { useState } from 'react'
import { MaterialCommunityIcons,MaterialIcons, FontAwesome5, Entypo, Fontisto } from '@expo/vector-icons'

 
const InputBox = () => {
    const [ message, setMessage ] = useState("");

    const onSendPressonMicrophonePress = () => {
        console.log('recording.....')
    }

    const onSendPress = () => {
        console.log(`${message}`)
        // Send message to backend
        setMessage('')

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


