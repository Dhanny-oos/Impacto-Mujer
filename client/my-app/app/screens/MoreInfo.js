import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MoreInfo = ({ route }) => {
  const { program } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{program.name}</Text>
      <Text style={styles.description}>{program.description}</Text>
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
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
  description: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default MoreInfo;
