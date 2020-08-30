import React from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';

const Home = ({navigation}) => {
  const [room, setRoom] = React.useState('1234');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AppRTC Clone</Text>
      <Text style={styles.instruction}>Please enter a room name.</Text>
      <TextInput
        onChangeText={(text) => setRoom(text)}
        value={room}
        style={styles.roomInput}
        keyboardType="number-pad"
      />
      <View style={styles.buttons}>
        <Button
          title="Join"
          onPress={() => navigation.navigate('WebRTC', {room})}
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
    fontSize: 20,
  },
  instruction: {
    color: '#eee',
  },
  roomInput: {
    color: '#fff',
    height: 40,
    borderBottomColor: '#4c4c4f',
    borderBottomWidth: 1,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Home;
