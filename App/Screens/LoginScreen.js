import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View, TextInput, Button } from 'react-native';
import { material } from 'react-native-typography';
import firestore from '../Config/FirebaseConfig';
import firebase from 'firebase';

export default function LoginScreen(props) {
  const [signUpName, setSignUpName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [errorMessageLogin, setErrorMessageLogin] = useState('');

  // Check out this link to learn more about firebase.auth()
  // https://firebase.google.com/docs/reference/node/firebase.auth.Auth
  let signUp = async () => {
    try {
      const response = await firebase.auth().createUserWithEmailAndPassword(signUpEmail, signUpPassword);
      if(response.user) {
        const user = firebase.auth().currentUser;
        var userDocRef = firestore.doc('users/' + user.uid);

        // Since my document doesn't exist, userDocRef.set will
        // create the document for me
        userDocRef.set({
          name: signUpName
        });
        props.updateStatus(true);
      }
    } catch (err) {
      console.log(err);
    }
  }
  
  // Check out this link to learn more about firebase.auth()
  // https://firebase.google.com/docs/reference/node/firebase.auth.Auth
  let login = async () => {
    try {
      // Note that we don't have to tell the app that the user has logged in.
      // firebase.auth().onAuthStateChanged() in App.js communicates this for us!
      await firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword)
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <SafeAreaView style={styles.container}>

      <TextInput
        style={styles.input}
        value={signUpName}
        onChangeText={(signUpName) => setSignUpName(signUpName)}
        placeholder="Name" 
      />
      <TextInput
        style={styles.input}
        value={signUpEmail}
        onChangeText={(signUpEmail) => setSignUpEmail(signUpEmail)}
        placeholder="Email" 
      />
      <TextInput
        style={styles.input}
        value={signUpPassword}
        secureTextEntry={true}
        onChangeText={(signUpPassword) => setSignUpPassword(signUpPassword)}
        placeholder="Password" 
      />
      <Button
        title="Sign Up"
        onPress={()=> signUp()}
        color='#ffa000'
      />


      <TextInput
        style={[styles.input, {marginTop: 50}]}
        value={loginEmail}
        onChangeText={(loginEmail) => setLoginEmail(loginEmail)}
        placeholder="Email" 
      />
      <TextInput
        style={styles.input}
        value={loginPassword}
        secureTextEntry={true}
        onChangeText={(loginPassword) => setLoginPassword(loginPassword)}
        placeholder="Password" 
      />
      <Button
        title='Login'
        onPress={()=> login()}
        color='#ffa000'
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '90%',
    fontSize: 20,
    marginBottom: 10,
    backgroundColor: 'whitesmoke',
    padding: 5,
    borderRadius: 5,
  },
  button: {
    marginBottom: 50
  }
});