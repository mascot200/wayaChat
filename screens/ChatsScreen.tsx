import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';


import NewMessageButton from '../components/NewMessageButton'
import {  View } from '../components/Themed';
import chatRooms from '../data/ChatRooms'
import ChatListItem from '../components/ChatListItem';





export default function ChatsScreen() {
  return (
    <View style={styles.container}>
      <FlatList  data={chatRooms}
       renderItem={({ item }) => <ChatListItem chatRoom={item} />}
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
