import React from 'react';
import {Text} from 'react-native';
import {mediaDevices} from 'react-native-webrtc';

const WebRTC = ({route}) => {
  console.log(route.params);
  mediaDevices.enumerateDevices().then((sourceInfos) => {
    console.log(sourceInfos);
  });
  return <Text>Hey</Text>;
};

export default WebRTC;
