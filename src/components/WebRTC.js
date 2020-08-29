import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {RTCView, mediaDevices} from 'react-native-webrtc';

const dimensions = Dimensions.get('window');

const WebRTC = ({route}) => {
  const [localStreamURL, setLocalStreamURL] = useState(null);
  const [remoteStreamURL, setRemoteStreamURL] = useState(null);

  console.log(route.params);
  mediaDevices.enumerateDevices().then((sourceInfos) => {
    console.log(sourceInfos);
  });
  useEffect(() => {
    mediaDevices
      .getUserMedia({
        video: {
          mandatory: {
            minWidth: 500,
            minHeight: 300,
            minFrameRate: 30,
          },
        },
      })
      .then((stream) => {
        setLocalStreamURL(stream.toURL());
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.video}>
        <View style={styles.localVideo}>
          <View style={styles.videoWidget}>
            {localStreamURL && (
              <RTCView streamURL={localStreamURL} style={styles.rtcView} />
            )}
          </View>
        </View>
        <View style={styles.remoteVideo}>
          <View style={styles.videoWidget}>
            {remoteStreamURL && (
              <RTCView streamURL={remoteStreamURL} style={styles.rtcView} />
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  video: {
    flex: 1,
    flexDirection: 'row',
    position: 'relative',
    backgroundColor: '#eee',
    alignSelf: 'stretch',
  },
  localVideo: {
    flex: 0.5,
    backgroundColor: '#faa',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  remoteVideo: {
    flex: 0.5,
    backgroundColor: '#aaf',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  videoWidget: {
    position: 'relative',
    flex: 0.5,
    backgroundColor: '#fff',
    width: dimensions.width / 2,
    borderWidth: 1,
    borderColor: '#eee',
  },
  rtcView: {
    flex: 1,
    width: dimensions.width / 2,
    backgroundColor: '#f00',
    position: 'relative',
  },
});

export default WebRTC;
