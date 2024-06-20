// Resources.js
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const { width: screenWidth } = Dimensions.get('window');

const resourcesData = [
  { 
    id: 1,
    name: 'Taller 1',
    description: 'Descripción del taller 1'
  },
  { 
    id: 2,
    name: 'Taller 2',
    description: 'Descripción del taller 2'
  },
  { 
    id: 3,
    name: 'Taller 3',
    description: 'Descripción del taller 3'
  },
  { 
    id: 4,
    name: 'Taller 4',
    description: 'Descripción del taller 4'
  },
  { 
    id: 5,
    name: 'Taller 5',
    description: 'Descripción del taller 5'
  },
];

const Resources = ({ navigation }) => {
  const handleResourcePress = (program) => {
    navigation.navigate('MoreInfo', { program });
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.textTop, styles.section]}>Talleres</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {resourcesData.map((program) => (
          <TouchableOpacity
            key={program.id}
            style={styles.card}
            onPress={() => handleResourcePress(program)}
          >
            <Text style={styles.cardTitle}>{program.name}</Text>
            <Text style={styles.cardDescription}>{program.description}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <StatusBar style="auto" backgroundColor="#E1AFD1" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1AFD1',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    marginTop: 10,
  },
  textTop: {
    textAlignVertical: 'top',
  },
  section: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'left',
    margin: 10,
    marginTop: 20,
    marginBottom: 30,
    color: 'black',
  },
  scrollContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 150,
    width: '95%',
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 16,
  },
});

export default Resources;