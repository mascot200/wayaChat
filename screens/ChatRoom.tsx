import React from 'react';
import { View, Text, FlatList, ImageBackground } from 'react-native'
import { useRoute } from '@react-navigation/native'
import chatRoomData from '../data/Chats'
import ChatMessage from '../components/ChatMessge/'
import BG from '../assets/images/BG.png'
import InputBox from '../components/InputBox'
import { useState, useEffect } from 'react'
import { API, graphqlOperation, Auth } from 'aws-amplify'
import { messagesByChatRoom } from '../src/graphql/queries'

const ChatRoomScreen = () => {
    const route = useRoute();
    console.log(route.params.id)
    const [ messages, setMessages] = useState([])
    const [myId, setMyId] = useState(null);
    useEffect( () => {
        const fetchMessages = async () => {
          const messageData = await API.graphql(
              graphqlOperation(
                  messagesByChatRoom,{
                      chatRoomID: route.params.id,
                      sortDirection: "DESC"
                  }
              )
          )

          setMessages(messageData.data.messagesByChatRoom.items)
        }
     fetchMessages()
    }, [])

    useEffect(() => {
        const getMyId = async () => {
            const userInfo = await Auth.currentAuthenticatedUser()
            setMyId(userInfo.attributes.sub)
        }
        getMyId()
    }, [])
    return (
        <ImageBackground style={{ width: '100%', height: '100%'}} source={BG}>
            <FlatList
            data={messages}
            renderItem={({item}) => <ChatMessage myId={myId} message={item} />}
            inverted
            />
            <InputBox chatRoomID={route.params.id} />
          
        </ImageBackground>
      
    )
}

export default  ChatRoomScreen;