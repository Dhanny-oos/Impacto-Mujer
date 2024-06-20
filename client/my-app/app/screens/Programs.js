import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

const programsData = [
  { id: 1, name: 'Programa 1' },
  { id: 2, name: 'Programa 2' },
  { id: 3, name: 'Programa 3' },
  { id: 4, name: 'Programa 4' },
  { id: 5, name: 'Programa 5' },
  { id: 6, name: 'Programa 6' },
  { id: 7, name: 'Programa 7' },
  { id: 8, name: 'Programa 8' },
  { id: 9, name: 'Programa 9' },
  { id: 10, name: 'Programa 10' },
  { id: 11, name: 'Programa 11' },
  { id: 12, name: 'Programa 12' },
  { id: 13, name: 'Programa 13' },
];

const Programs = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [programs, setPrograms] = useState(programsData);

  const handleSearch = (text) => {
    setSearchText(text);
    const filteredPrograms = programsData.filter(program =>
      program.name.toLowerCase().includes(text.toLowerCase())
    );
    setPrograms(filteredPrograms);
  };

  const handleProgramPress = (program) => {
    navigation.navigate('MoreInfo', { program });
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder=" Buscar Programa..."
          value={searchText}
          onChangeText={handleSearch}
        />
        {searchText.length > 0 && (
          <TouchableOpacity onPress={() => handleSearch('')} style={styles.clearIcon}>
            <Ionicons name="backspace" size={20} color="#888" />
          </TouchableOpacity>
        )}
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {programs.map((program) => (
          <TouchableOpacity
            key={program.id}
            style={styles.programBox}
            onPress={() => handleProgramPress(program)}
          >
            <Text style={styles.programText}>{program.name}</Text>
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
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  searchBar: {
    flex: 1,
    height: 45,
    fontSize: 16,
  },
  clearIcon: {
    marginLeft: 10,
  },
  scrollContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  programBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    width: '90%',
    height: 130,
    alignItems: 'center',
    justifyContent: 'center',
  },
  programText: {
    fontSize: 16,
  },
});

export default Programs;
