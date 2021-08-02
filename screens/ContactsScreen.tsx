import * as React from 'react';
import { StyleSheet, FlatList, View, Text, ActivityIndicator  } from 'react-native';
import NewMessageButton from '../components/NewMessageButton'
import ContactsListItem from '../components/ContactsList';
import { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listUsers } from '../src/graphql/queries';


export default function ContactsScreen() {

  const [ users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  
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
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    fetchUser()
  }, [])

  if(loading) {
    return (
      <View style={[styles.container, styles.horizontal]}>
         
      </View>
    )
  }else{
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});
