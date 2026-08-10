import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet, Platform } from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomeScreen from './screens/HomeScreen';
import NotesScreen from './screens/NotesScreen';
import MissionsScreen from './screens/MissionsScreen';
import QuestsScreen from './screens/QuestsScreen';
import ProfileScreen from './screens/ProfileScreen';
import { COLORS } from './constants/theme';

const Tab = createBottomTabNavigator();

function TabIcon({ name, focused, library = 'ionicons' }) {
  const color = focused ? COLORS.primary : COLORS.textMuted;
  const size = 22;

  if (library === 'material') {
    return <MaterialCommunityIcons name={name} size={size} color={color} />;
  }
  if (library === 'fontawesome') {
    return <FontAwesome5 name={name} size={size - 2} color={color} />;
  }
  return <Ionicons name={name} size={size} color={color} />;
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: styles.tabBar,
            tabBarActiveTintColor: COLORS.primary,
            tabBarInactiveTintColor: COLORS.textMuted,
            tabBarLabelStyle: styles.tabLabel,
            tabBarShowLabel: true,
          }}
        >
          <Tab.Screen
            name="Mundo"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <TabIcon name={focused ? 'home' : 'home-outline'} focused={focused} />
              ),
            }}
          />
          <Tab.Screen
            name="Notas"
            component={NotesScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <TabIcon name={focused ? 'document-text' : 'document-text-outline'} focused={focused} />
              ),
            }}
          />
          <Tab.Screen
            name="Listas"
            component={MissionsScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <TabIcon name={focused ? 'list' : 'list-outline'} focused={focused} />
              ),
            }}
          />
          <Tab.Screen
            name="Tarefas"
            component={QuestsScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <TabIcon name={focused ? 'checkbox' : 'checkbox-outline'} focused={focused} />
              ),
            }}
          />
          <Tab.Screen
            name="Perfil"
            component={ProfileScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <TabIcon name={focused ? 'person' : 'person-outline'} focused={focused} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: COLORS.backgroundSecondary,
    borderTopColor: COLORS.border,
    borderTopWidth: 1,
    height: Platform.OS === 'ios' ? 88 : 65,
    paddingBottom: Platform.OS === 'ios' ? 28 : 8,
    paddingTop: 8,
  },
  tabLabel: {
    fontSize: 11,
    fontWeight: '600',
  },
});
