import React from 'react';
import {StyleSheet, View, Text, TextInput, Button, Alert} from 'react-native';

const Home = ({navigation}) => {
  const [room, setRoom] = React.useState('1234');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AppRTC</Text>
      <Text>Please enter a room name.</Text>
      <TextInput onChangeText={(text) => setRoom(text)} value={room} />
      <View style={styles.buttons}>
        <Button
          title="Join"
          onPress={() => navigation.navigate('WebRTC', {room})}
        />
        <Button
          title="Random"
          onPress={() => Alert.alert('Random button pressed')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
  },
  roomInput: {
    height: 40,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Home;
