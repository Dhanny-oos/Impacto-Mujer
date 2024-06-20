import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Notifications = () => {
    
  return (
    <View style={styles.container}>
        <View style={[styles.c_info, {marginTop: 20}]}>
          <Text style={styles.info}>
            Status programa X:
            Aceptada
          </Text>
        </View>
        <View style={styles.c_info}>
          <Text style={styles.info}>
            Status programa X:
            Rechazada
          </Text>
        </View>
        <View style={styles.c_info}>
          <Text style={styles.info}>
            Status programa X:
            Aceptada
          </Text>
        </View>
        <View style={styles.c_info}>
          <Text style={styles.info}>
            Status programa X:
            Aceptada
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

    c_info: {
      backgroundColor: '#FFCAD4',
      padding: 20,
      borderRadius: 10,
      marginTop: 10,
      marginBottom: 5,
      shadowColor: "#000",
    },
  
    info: {
      fontWeight: '900',
    }
});

export default Notifications;