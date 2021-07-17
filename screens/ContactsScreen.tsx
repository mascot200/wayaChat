import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import NewMessageButton from '../components/NewMessageButton'
import {  View } from '../components/Themed';
import users from '../data/Users'
import ContactsListItem from '../components/ContactsList';


export default function ContactsScreen() {
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
