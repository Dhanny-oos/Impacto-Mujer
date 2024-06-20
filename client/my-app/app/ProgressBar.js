import React from 'react';
import { View, StyleSheet } from 'react-native';

const ProgressBar = ({ progress }) => {
  return (
    <View style={styles.progressBarContainer}>
      <View style={[styles.progressBar, { width: `${progress * 100}%` }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  progressBarContainer: {
    height: 10,
    width: '100%',
    backgroundColor: '#e0e0df',
    borderRadius: 5,
    overflow: 'hidden',
    marginTop: 45,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#9B86BD',
  },
});

export default ProgressBar;
