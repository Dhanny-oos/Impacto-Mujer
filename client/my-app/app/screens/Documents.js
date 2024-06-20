import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Documents = () => {
    
  return (
    <View style={styles.container}>
      <Text style={{
        fontSize: 30,
        textAlign: 'center',
        marginTop: '20'
      }}
      >Documents Screen</Text>
      <StatusBar style="auto" backgroundColor="#E1AFD1" />
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E1AFD1',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Documents;