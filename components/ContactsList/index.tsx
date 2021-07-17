import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback, Alert } from 'react-native'
import { User } from '../../types'
import styles from '../ContactsList/style'
import  moment  from 'moment'
import { useNavigation } from '@react-navigation/native'

export type ContactsListItemPros = {
    user: User;
}



const ContactsListItem = (props: ContactsListItemPros) => {
    const { user } = props


    const navigation = useNavigation();

    const onClick = () => {
       
    }


   return(
    <TouchableWithoutFeedback onPress={onClick}>
       <View style={styles.container}>
           <View style={styles.leftContainer}>
             <Image source={{ uri: user.imageUrl }} style={styles.avatar} />
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