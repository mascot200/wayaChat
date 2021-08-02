import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback, Alert } from 'react-native'
import { User } from '../../types'
import styles from '../ContactsList/style'
import  moment  from 'moment'
import { useNavigation } from '@react-navigation/native'
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { createChatRoom, createChatRoomUser } from '../../src/graphql/mutations';
import { listChatRoomUsers } from '../../src/graphql/queries';

export type ContactsListItemPros = {
    user: User;
}



const ContactsListItem = (props: ContactsListItemPros) => {
    const { user } = props
   
  


    const navigation = useNavigation();

    const onClick =  async () => {
        const userInfo = await Auth.currentAuthenticatedUser();
       // Create a new chat room between the auth user and the clicked user and
       try  {
        const newChatRoomData = await API.graphql(
            graphqlOperation(
                createChatRoom,
                { input: {}}
            )
        )

        if(!newChatRoomData.data){
            console.log("failed to create chatroom")
            return;
        }

     


            const newChatRoom = newChatRoomData.data.createChatRoom;
            console.log(newChatRoom)
        
       

         // Add the clicked user to the created chatroom 
      
         const newUserChatRoom = await API.graphql(
             graphqlOperation(
                 createChatRoomUser,
                 { 
                     input: { 
                        userID: user.id, 
                        chatRoomID: newChatRoom.id
                    }
                }
             )
         )
           

       // Add authenticated user to the chat room
    
       await API.graphql(
       graphqlOperation(
           createChatRoomUser,
            { 
                input: {
                    userID: userInfo.attributes.sub, 
                    chatRoomID: newChatRoom.id
                }
            }
       )
   )

      // Then move the auth user to the chatroom route 
        navigation.navigate("ChatRoom", { 
            id: newChatRoom.id, 
            name:user.name
        })

        } catch (error) {
            
        }
      
    }


   return(
    <TouchableWithoutFeedback onPress={onClick}>
       <View style={styles.container}>
           <View style={styles.leftContainer}>
             <Image source={{ uri: user.imageUri }} style={styles.avatar} />
             <View style={styles.midContainer}>
                <Text style={styles.username}>{user.name}</Text>
                <Text style={styles.status}>{user.status}</Text>
            </View>
           </View>
       </View>
       </TouchableWithoutFeedback>
   )
}

export default ContactsListItem;