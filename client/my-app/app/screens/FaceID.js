// FaceID.js
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera/legacy';
import { useNavigation, useRoute } from '@react-navigation/native';

const FaceID = () => {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const navigation = useNavigation();
  const route = useRoute();
  const targetScreen = route.params?.targetScreen || 'Account';

  const [type] = useState(Camera.Constants.Type.front);
  const [scanned, setScanned] = useState(false);

  const cameraRef = useRef(null);

  useEffect(() => {
    requestPermission();
  }, [requestPermission]);

  const handleFaceRecognition = () => {
    
    setTimeout(() => {
      console.log("Face recognized!");
      navigation.replace(targetScreen);
    }, 3000);
  };

  if (!permission) {
    
    return <View />;
  }

  if (!permission.granted) {
    
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Necesitamos tu permiso para mostrar la cámara</Text>
        <TouchableOpacity style={styles.button} onPress={requestPermission}>
          <Text style={styles.text}>Conceder permiso</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        <Camera
          ref={cameraRef}
          style={styles.camera}
          type={type}
        >
          <View style={styles.overlay}>
            {scanned && (
              <View style={styles.progress} />
            )}
          </View>
        </Camera>
      </View>
      <Text style={styles.continue}>
        Antes de continuar, necesitamos verificar que eres tú...
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleFaceRecognition}>
          <Text style={styles.text}>Validar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1AFD1',
    alignItems: 'center',
  },
  cameraContainer: {
    height: 340,
    width: 290,
    overflow: 'hidden',
    borderRadius: 30,
    marginTop: 50,
  },
  camera: {
    flex: 1,
    height: 290,
    width: 290, 
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  continue: {
    marginLeft: 20,
    marginRight: 20,
    fontSize: 22,
    marginTop: 70,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    width: 120,
    height: 'auto',
    borderRadius: 30,
    marginTop: 180,
  },
  button: {
    padding: 20,
    backgroundColor: '#9B86BD',
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  progress: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
    borderRadius: 25,
  },
});

export default FaceID;
