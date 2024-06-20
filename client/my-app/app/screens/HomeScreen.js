import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import ProgressBar from '../ProgressBar';

const { width: screenWidth } = Dimensions.get('window');

const Home = () => {
  const navigation = useNavigation();

  const carouselItems = [
    {
      id: 1,
      name: 'Programa 1',
      description: 'Descripción del programa 1',
    },
    {
      id: 2,
      name: 'Programa 2',
      description: 'Descripción del programa 2',
    },
    {
      id: 3,
      name: 'Programa 3',
      description: 'Descripción del programa 3',
    },
  ];

  const workshopProgress = [
    {
      id: 1,
      name: 'Taller 1',
      description: 'Descripción del taller 1',
      progress: 0.5,
    },
    {
      id: 2,
      name: 'Taller 2',
      description: 'Descripción del taller 2',
      progress: 0.8,
    },
    {
      id: 3,
      name: 'Taller 3',
      description: 'Descripción del taller 3',
      progress: 0.3,
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('MoreInfo', { program: item })}
      >
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Text style={styles.cardDescription}>{item.description}</Text>
      </TouchableOpacity>
    );
  };

  const renderWorkshopItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('MoreInfo', { program: item })}
      >
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Text style={styles.cardDescription}>{item.description}</Text>
        <ProgressBar progress={item.progress} />
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={[styles.welcome, styles.textTop]}>Bienvenida Marinette</Text>
        <Text style={[styles.textTop, styles.section]}>Programas activos:</Text>
        <View style={styles.carouselContainer}>
          <FlatList
            data={carouselItems}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            snapToInterval={screenWidth * 0.8 + 20} // Ajusta el intervalo de desplazamiento
            decelerationRate="fast"
            contentContainerStyle={styles.carousel}
          />
        </View>

        <Text style={[styles.textTop, styles.section]}>Destacados:</Text>
        <View style={styles.info_user}>
          <TouchableOpacity 
            style={styles.ir_a}
            onPress={() => navigation.navigate('Programs')}>
            <View style={styles.content_info}>
              <Ionicons name='apps' size={20} color="black" style={styles.icon}/>
              <Text style={styles.titulo}>Programas</Text>
              <Ionicons name='chevron-forward' size={20} color="black" style={styles.iconArrow}/>
            </View>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity 
            style={styles.ir_a}
            onPress={() => navigation.navigate('Results')}>
            <View style={styles.content_info}>
              <Ionicons name='list-sharp' size={20} color="black" style={styles.icon}/>
              <Text style={styles.titulo}>Resultados</Text>
              <Ionicons name='chevron-forward' size={20} color="black" style={styles.iconArrow}/>
            </View>
          </TouchableOpacity>
        </View>

        <Text style={[styles.textTop, styles.section]}>Continuar:</Text>
        <View style={styles.carouselContainer}>
          <FlatList
            data={workshopProgress}
            renderItem={renderWorkshopItem}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            snapToInterval={screenWidth * 0.8 + 20} // Ajusta el intervalo de desplazamiento
            decelerationRate="fast"
            contentContainerStyle={styles.carousel}
          />
        </View>
        <StatusBar style="auto" backgroundColor="#E1AFD1" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },

  container: {
    flex: 1,
    backgroundColor: '#E1AFD1',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 30,
    marginTop: 10,
  },

  welcome: {
    fontSize: 34,
    fontWeight: '900',
    textAlign: 'left',
    margin: 10,
    color: '#FF0080',
  },

  section: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'left',
    margin: 10,
    marginTop: 10,
    marginBottom: 20,
    color: 'black',
  },

  textTop: {
    textAlignVertical: 'top',
  },

  carouselContainer: {
    height: 180,
    marginBottom: 0,
  },

  carousel: {
    justifyContent: 'center',
  },

  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 150,
    width: screenWidth * 0.8,
    padding: 20,
    marginHorizontal: 10,
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

  info_user: {
    backgroundColor: 'white',
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    borderRadius: 15,
  },

  separator: {
    height: 1,
    backgroundColor: '#cccccc',
    marginVertical: 10,
  },

  content_info: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },

  titulo: {
    fontSize: 20,
    position: 'relative',
  },

  iconArrow: {
    marginLeft: 'auto',
  },
});

export default Home;
