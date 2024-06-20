// Profile.js
import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import user from '../../assets/images/user.png';

const Profile = () => {
  const navigation = useNavigation();

  const navigateToFaceID = (screen) => {
    navigation.navigate('FaceID', { targetScreen: screen });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View>
          <View style={styles.image_container}>
            <Image source={user} style={styles.image} resizeMode="stretch" />
          </View>
          <Text style={styles.name}>Marinette DuPain-Cheng</Text>

          <View style={styles.info_user}>
            <TouchableOpacity
              style={styles.ir_a}
              onPress={() => navigateToFaceID('Account')}>
              <View style={styles.content_info}>
                <Ionicons name='person' size={20} color="black" style={styles.icon} />
                <Text style={styles.titulo}>Cuenta</Text>
                <Ionicons name='chevron-forward' size={20} color="black" style={styles.iconArrow} />
              </View>
            </TouchableOpacity>
            <View style={styles.separator} />
            <TouchableOpacity
              style={styles.ir_a}
              onPress={() => navigation.navigate('Preferences')}>
              <View style={styles.content_info}>
                <Ionicons name='bulb' size={20} color="black" style={styles.icon} />
                <Text style={styles.titulo}>Preferencias</Text>
                <Ionicons name='chevron-forward' size={20} color="black" style={styles.iconArrow} />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.info_user_s2}>
            <TouchableOpacity
              style={styles.ir_a}
              onPress={() => navigateToFaceID('Notifications')}>
              <View style={styles.content_info}>
                <Ionicons name='notifications' size={20} color="black" style={styles.icon} />
                <Text style={styles.titulo}>Notificaciones</Text>
                <Ionicons name='chevron-forward' size={20} color="black" style={styles.iconArrow} />
              </View>
            </TouchableOpacity>
            <View style={styles.separator} />
            <TouchableOpacity
              style={styles.ir_a}
              onPress={() => navigateToFaceID('Request')}>
              <View style={styles.content_info}>
                <Ionicons name='folder-open' size={20} color="black" style={styles.icon} />
                <Text style={styles.titulo}>Solicitudes</Text>
                <Ionicons name='chevron-forward' size={20} color="black" style={styles.iconArrow} />
              </View>
            </TouchableOpacity>
            <View style={styles.separator} />
            <TouchableOpacity
              style={styles.ir_a}
              onPress={() => navigateToFaceID('Documents')}>
              <View style={styles.content_info}>
                <Ionicons name='documents' size={20} color="black" style={styles.icon} />
                <Text style={styles.titulo}>Documentos</Text>
                <Ionicons name='chevron-forward' size={20} color="black" style={styles.iconArrow} />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.info_user_s3}>
            <TouchableOpacity
              style={styles.ir_a}
              onPress={() => navigateToFaceID('Identity')}>
              <View style={styles.content_info}>
                <Ionicons name='id-card' size={20} color="black" style={styles.icon} />
                <Text style={styles.titulo}>Identidad organizacional</Text>
                <Ionicons name='chevron-forward' size={20} color="black" style={styles.iconArrow} />
              </View>
            </TouchableOpacity>
            <View style={styles.separator} />
            <TouchableOpacity
              style={styles.ir_a}
              onPress={() => navigateToFaceID('Help')}>
              <View style={styles.content_info}>
                <Ionicons name='help-circle' size={20} color="black" style={styles.icon} />
                <Text style={styles.titulo}>Ayuda y soporte</Text>
                <Ionicons name='chevron-forward' size={20} color="black" style={styles.iconArrow} />
              </View>
            </TouchableOpacity>
            <View style={styles.separator} />
            <TouchableOpacity
              style={styles.ir_a}
              onPress={() => navigation.navigate('Login')}>
              <View style={styles.content_info}>
                <Ionicons name='log-out' size={20} color="black" style={styles.icon} />
                <Text style={styles.titulo}>Salir</Text>
                <Ionicons name='chevron-forward' size={20} color="black" style={styles.iconArrow} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <StatusBar style="auto" backgroundColor="#E1AFD1" />
      </View>
    </ScrollView>
  );
}
//Aqui estuvo Merino

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#E1AFD1',
    marginTop: 10,
  },
  image_container: {
    backgroundColor: 'white',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 130,
    marginTop: 60,
    borderRadius: 100,
    height: 150,
    width: 150,
  },
  image: {
    width: "115%",
    height: "115%",
    borderRadius: 80,
    alignSelf: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 5,
    marginTop: 20,
    textAlign: 'center',
  },
  info_user: {
    backgroundColor: 'white',
    padding: 25,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 50,
    borderRadius: 15,
  },
  info_user_s2: {
    backgroundColor: 'white',
    padding: 25,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    borderRadius: 15,
  },
  info_user_s3: {
    backgroundColor: 'white',
    padding: 25,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 15,
  },
  ir_a: {
    // marginBottom: 5,
  },
  titulo: {
    fontSize: 20,
    position: 'relative',
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
  iconArrow: {
    marginLeft: 'auto',
  },
});

export default Profile;
