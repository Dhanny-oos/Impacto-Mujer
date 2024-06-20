import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {DrawerContentScrollView, DrawerItem, createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

// Screens
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import HomeScreen from "./screens/HomeScreen";
import Profile from "./screens/Profile";
import Programs from "./screens/Programs";
import Resources from "./screens/Resources";
import MoreInfo from "./screens/MoreInfo";
import Account from "./screens/Account";
import Preferences from "./screens/Preferences";
import Notifications from "./screens/Notifications";
import Request from "./screens/Request";
import Documents from "./screens/Documents";
import Identity from "./screens/Identity";
import Help from "./screens/Help";
import Results from "./screens/Results";
import FaceID from "./screens/FaceID";
import Advice from "./screens/Advice";
import {TabButton} from './../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function Home() {
    const tabs = [
        {
            id: 1,
            title: 'Inicio',
            screen: 'Inicio',
            icon: 'home',
            Component: HomeScreen,
        },
        {
            id: 2,
            title: 'Programas',
            screen: 'Programas',
            icon: 'apps-box',
            Component: Programs,
        },
        {
            id: 3,
            title: 'Recursos',
            screen: 'Recursos',
            icon: 'android-messages',
            Component: Resources,
        },
        {
            id: 4,
            title: 'Perfil',
            screen: 'Perfil',
            icon: 'account',
            Component: Profile,
        }
    ]

    return (
        <Tab.Navigator
            initialRouteName={"Inicio"}
            screenOptions={{
                headerShown: false,
                tabBarStyle: styles.tabBar
            }}
        >
            {
                tabs.map ((item, index) => 
                    <Tab.Screen
                        key={item.id}
                        name={item.screen}
                        component={item.Component}
                        options={{
                            tabBarShowLabel: false,
                            tabBarButton: (props) => <TabButton item={item} {...props}/>}}
                    />
                )
            }
        </Tab.Navigator>
    );
}

function Auth(props) {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Login'
            >
                <Stack.Screen name="Login" component={Login}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen name='SignUp' component={SignUp}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen name='Home' component={Home} 
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen name='MoreInfo' component={MoreInfo} 
                    options={{
                        headerShown: true,
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: '#E1AFD1',
                        },
                        headerTitleStyle: {
                            color: '#E1AFD1',
                            fontWeight: 'bold',
                            fontSize: 25,
                        },
                    }}
                />
                <Stack.Screen name='Account' component={Account} 
                    options={({navigation}) => ({
                        headerShown: true,
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: '#E1AFD1',
                        },
                        headerTitleStyle: {
                            color: 'black',
                            fontWeight: '600',
                            fontSize: 25,
                        },
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Ionicons name="chevron-back" size={24} color="black" style={{ marginLeft: 5 }} />
                            </TouchableOpacity>
                        )
                    })}
                />
                <Stack.Screen name='HomeScreen' component={HomeScreen} 
                    options={({navigation}) => ({
                        headerShown: false,
                    })}
                />
                <Stack.Screen name='FaceID' component={FaceID} 
                    options={({navigation}) => ({
                        headerShown: true,
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: '#E1AFD1',
                        },
                        headerTitleStyle: {
                            color: 'black',
                            fontWeight: '600',
                            fontSize: 25,
                        },
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Ionicons name="chevron-back" size={24} color="black" style={{ marginLeft: 5 }} />
                            </TouchableOpacity>
                        )
                    })}
                />
                <Stack.Screen name='Programs' component={Programs} 
                    options={({navigation}) => ({
                        headerShown: false,
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: '#E1AFD1',
                        },
                        headerTitleStyle: {
                            color: 'black',
                            fontWeight: '600',
                            fontSize: 25,
                        },
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Ionicons name="chevron-back" size={24} color="black" style={{ marginLeft: 5 }} />
                            </TouchableOpacity>
                        )
                    })}
                />
                <Stack.Screen name='Resources' component={Resources} 
                    options={({navigation}) => ({
                        headerShown: false,
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: '#E1AFD1',
                        },
                        headerTitleStyle: {
                            color: 'black',
                            fontWeight: '600',
                            fontSize: 25,
                        },
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Ionicons name="chevron-back" size={24} color="black" style={{ marginLeft: 5 }} />
                            </TouchableOpacity>
                        )
                    })}
                />
                <Stack.Screen name='Results' component={Results} 
                    options={({navigation}) => ({
                        headerShown: true,
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: '#E1AFD1',
                        },
                        headerTitleStyle: {
                            color: 'black',
                            fontWeight: '600',
                            fontSize: 25,
                        },
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Ionicons name="chevron-back" size={24} color="black" style={{ marginLeft: 5 }} />
                            </TouchableOpacity>
                        )
                    })}
                />
                <Stack.Screen name='Preferences' component={Preferences} 
                    options={({navigation}) => ({
                        headerShown: true,
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: '#E1AFD1',
                        },
                        headerTitleStyle: {
                            color: 'black',
                            fontWeight: '600',
                            fontSize: 25,
                        },
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Ionicons name="chevron-back" size={24} color="black" style={{ marginLeft: 5 }} />
                            </TouchableOpacity>
                        )
                    })}
                />
                <Stack.Screen name='Notifications' component={Notifications} 
                    options={({navigation}) => ({
                        headerShown: true,
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: '#E1AFD1',
                        },
                        headerTitleStyle: {
                            color: 'black',
                            fontWeight: '600',
                            fontSize: 25,
                        },
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Ionicons name="chevron-back" size={24} color="black" style={{ marginLeft: 5 }} />
                            </TouchableOpacity>
                        )
                    })}
                />
                <Stack.Screen name='Request' component={Request} 
                    options={({navigation}) => ({
                        headerShown: true,
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: '#E1AFD1',
                        },
                        headerTitleStyle: {
                            color: 'black',
                            fontWeight: '600',
                            fontSize: 25,
                        },
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Ionicons name="chevron-back" size={24} color="black" style={{ marginLeft: 5 }} />
                            </TouchableOpacity>
                        )
                    })}
                />
                <Stack.Screen name='Documents' component={Documents} 
                    options={({navigation}) => ({
                        headerShown: true,
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: '#E1AFD1',
                        },
                        headerTitleStyle: {
                            color: 'black',
                            fontWeight: '600',
                            fontSize: 25,
                        },
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Ionicons name="chevron-back" size={24} color="black" style={{ marginLeft: 5 }} />
                            </TouchableOpacity>
                        )
                    })}
                />
                <Stack.Screen name='Identity' component={Identity} 
                    options={({navigation}) => ({
                        headerShown: true,
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: '#E1AFD1',
                        },
                        headerTitleStyle: {
                            color: 'black',
                            fontWeight: '600',
                            fontSize: 25,
                        },
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Ionicons name="chevron-back" size={24} color="black" style={{ marginLeft: 5 }} />
                            </TouchableOpacity>
                        )
                    })}
                />
                <Stack.Screen name='Help' component={Help} 
                    options={({navigation}) => ({
                        headerShown: true,
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: '#E1AFD1',
                        },
                        headerTitleStyle: {
                            color: 'black',
                            fontWeight: '600',
                            fontSize: 25,
                        },
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Ionicons name="chevron-back" size={24} color="black" style={{ marginLeft: 5 }} />
                            </TouchableOpacity>
                        )
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

// const Hamburger = () => {
//     return <Drawer.Navigator initialRouteName={HomeScreen}
//     drawerContent={props => (
//         <DrawerContentScrollView {...props}>
//             <Text>Hello</Text>
//             <DrawerItem
//                 label={'Home'}
//                 onPress={() => 
//                     {props.navigation.navigate(HomeScreen)
//                 }}
//             />
//             <DrawerItem
//                 label={'Advice'}
//                 onPress={() => 
//                     {props.navigation.navigate(Advice)
//                 }}
//             />
//         </DrawerContentScrollView>
//     )}>
//     <Drawer.Screen name={HomeScreen} component={HomeScreen}/>
//     <Drawer.Screen name={Advice} component={Advice}/>
//     </Drawer.Navigator>
// }

export default Auth;

const styles = StyleSheet.create ({
    tabBar: {
        height: 70, // Altura del nav
        position: 'relative', // Actua como si no estuviera con los demas
        alignItems: 'center',
        borderWidth: 0.5, // Anchura del borde
        borderColor: '#dadada', // Color del borde
    }
})