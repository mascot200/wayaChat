import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import NewMessageButton from '../components/NewMessageButton'
import {  View } from '../components/Themed';
import ContactsListItem from '../components/ContactsList';
import { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listUsers } from '../src/graphql/queries';

export default function ContactsScreen() {

  const [ users, setUsers] = useState([])
  
  useEffect(() =>{
    const fetchUser = async () => {
      try {
        const usersData = await API.graphql(
          graphqlOperation(
            listUsers
          )
        )
        // update user states 
        setUsers(usersData.data.listUsers.items)
      } catch (error) {
        console.log(error)
      }
    }
    fetchUser()
  }, [])


  return (
    <View style={styles.container}>
      <FlatList style={{ width: '100%'}}  data={users}
       renderItem={({ item}) => <ContactsListItem user={item} />}
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
  },

});
