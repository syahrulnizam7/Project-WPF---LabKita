
import 'react-native-gesture-handler';

import * as React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Image  from 'react-native';
import HomeScreen from './pages/HomeScreen';
import InformasiAkunScreen from './pages/InformasiAkunScreen';
import ProfileScreen from './pages/ProfileScreen';
import GantiPasswordScreen from './pages/GantiPasswordScreen';
import PengaturanScreen from './pages/PengaturanScreen';
import HistoryScreen from './pages/HistoryScreen';
import ListLabScreen from './pages/ListLabScreen';
import LabScreen from './pages/LabScreen';
import Promosi from './pages/Promosi';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: '#61B0B7' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home Page' }}
      />
      
    </Stack.Navigator>
  );
}

function ListStack() {
  return (
    <Stack.Navigator
      initialRouteName="List"
      screenOptions={{
        headerStyle: { backgroundColor: '#61B0B7' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen
        name="ListLabScreen"
        component={ListLabScreen}
        options={{ title: 'ListLabPage' }}
      />
      <Stack.Screen
        name="LabScreen"
        component={LabScreen}
        options={{ title: 'LabPage' }}
      />
      
     
    </Stack.Navigator>
  );
}


function HistoryStack() {
  return (
    <Stack.Navigator
      initialRouteName="History"
      screenOptions={{
        headerStyle: { backgroundColor:  '#61B0B7' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{ title: 'Setting Page' }}
      />
     
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerStyle: { backgroundColor: '#61B0B7' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Profile' }}
      />
      <Stack.Screen
        name="InformasiAkun"
        component={InformasiAkunScreen}
        options={{ title: 'Informasi akun' }}
      />
      <Stack.Screen
        name="GantiPasswordScreen"
        component={GantiPasswordScreen}
        options={{ title: 'Ganti Password' }}
      />
      <Stack.Screen
        name="PengaturanScreen"
        component={PengaturanScreen}
        options={{ title: 'Pengaturan' }}
      />
      
    </Stack.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: '#61B0B7',
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="ListStack"
          component={ListStack}
          options={{
            tabBarLabel: 'List',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="list"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="HistoryStack"
          component={HistoryStack}
          options={{
            tabBarLabel: 'History',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="history" color={color} size={size} />
            ),
          }}
        />

         <Tab.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />
       
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
