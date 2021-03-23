import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { material } from 'react-native-typography';
import { Metrics } from '../Themes';
import { Entypo } from '@expo/vector-icons';
import Feed from '../Components/Feed'
import firebase from 'firebase';

export default function HomeScreen({ navigation }) {

  let onProfileRequested = (username) => {
    console.log("Requested: " + username);
    navigation.navigate('UserProfile', { username: username })
  }

  return (
    <View style={styles.container}>
      <Text style={{flexShrink: 1}}>
        <Text>You are logged in as: </Text>
        <Text style={{fontWeight: 'bold'}}>{firebase.auth().currentUser.email}</Text>
      </Text>
      <Button
        title="Log out!"
        onPress= {() => firebase.auth().signOut()}
        />
      {/* <Feed onProfileRequested={onProfileRequested} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});