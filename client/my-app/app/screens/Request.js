import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Request = () => {
    
  return (
    <View style={styles.container}>
        <View style={[styles.r_info, {marginTop: 20}]}>
          <Text style={styles.nameProgram}>
            Programa X:
          </Text>
          <Text style={styles.infoProgram}>
            wwoifoiqerf qejvbioenrvkq ervnqeprnvkwe fb qfno woe oqw dewqo ocer
          </Text>
          <Text style={styles.statusProgram}>
            Status: Pendente
          </Text>
        </View>
      <StatusBar style="auto" backgroundColor="#E1AFD1" />
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E1AFD1',
        paddingLeft: 15,
        paddingRight: 15,
    },

    r_info: {
      backgroundColor: '#FFCAD4',
      padding: 20,
      borderRadius: 10,
      marginTop: 10,
      marginBottom: 5,
      height: '20%',
      shadowColor: "#000",
    },
  
    nameProgram: {
      fontWeight: '900',
      fontSize: 18,
    },

    infoProgram: {
      fontSize: 14,
      color: '#000',
      marginTop: 10,
    },

    statusProgram: {
      fontSize: 14,
      color: '#000',
      marginVertical: 35,
      textAlign: 'right',
    },
});

export default Request;