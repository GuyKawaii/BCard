import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>

      <View style={styles.card}>
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.jobTitle}>Web Developer</Text>
        <Text style={styles.contactInfo}>Email: john@example.com</Text>
        <Text style={styles.contactInfo}>Phone: (123) 456-7890</Text>
      </View>

      <View style={styles.leftBox}>
        <Image source={{ uri: 'https://eu1files.itslearning.com/data/900180/Skin/customer_login_logo.png' }}
          style={{ width: 125, height: 47 }} />
        <Image source={require('./images/user-avatar.png')}
          style={{ width: 125, height: 125 }} />
        {/*  <View>
          <TextInput placeholder='name'></TextInput>
          <Button title='Press me' onPress={() => setCount(count + 1)} />
        </View>
        <Text>Yo yo yo det er the ultimate gamer in the house DAD</Text>
        <Text>{count}</Text>
        <StatusBar style="auto" /> */}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',

  },





  leftBox: {
    padding: 20,
  },

  // card styles
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    marginBottom: 15,
    paddingBottom: 35,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  jobTitle: {
    fontSize: 16,
    color: '#888',
    marginTop: 5,
  },
  contactInfo: {
    fontSize: 14,
    marginTop: 10,
  },
});
