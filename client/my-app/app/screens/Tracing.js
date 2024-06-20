import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Tracing = () => {
    
  return (
    <View style={styles.container}>
      <Text style={{
        fontSize: 30,
        textAlign: 'center',
        marginTop: '20'
      }}
      >Tracing Screen</Text>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dadada',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Tracing;