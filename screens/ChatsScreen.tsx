import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import {useEffect} from 'react'
import {Auth, API, graphqlOperation } from 'aws-amplify'
import { getUser } from './queries'


import NewMessageButton from '../components/NewMessageButton'
import {  View } from '../components/Themed';
import ChatListItem from '../components/ChatListItem';
import {useState} from 'react';


export default function ChatsScreen() {
  const [chatRooms, setChatRooms] = useState([])
  useEffect( () => {
  const  fetchChatRooms = async () =>{
      try {
        const userInfo = await Auth.currentAuthenticatedUser();
         const userData = await API.graphql(
           graphqlOperation(
             getUser, 
             {id: userInfo.attributes.sub}
           )
         )
         setChatRooms(userData.data.getUser.chatRoomUser.items)
       

      } catch (error) {
        console.log(error)
      }
    }
    fetchChatRooms();
  },[])

  return (
    <View style={styles.container}>
      <FlatList  data={chatRooms}
       renderItem={({ item }) => <ChatListItem chatRoom={item.chatRoom} />}
       keyExtractor={(item) => item.id}
      />
        <NewMessageButton />
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#fff',
    width: '100%',
  },

});
