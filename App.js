import * as React from "react";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import NotesScreen from "./screens/NotesScreen";
import MissionsScreen from "./screens/MissionsScreen";
import QuestsScreen from "./screens/QuestsScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: "#ffd66b",
          tabBarInactiveTintColor: "#8b8b8b",
          tabBarStyle: {
            backgroundColor: "#090b18",
            borderTopColor: "#23263a",
            height: 76,
            paddingBottom: 10,
            paddingTop: 8,
          },
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarIcon: ({ color, size }) => {
            let iconName = "ellipse";

            if (route.name === "Mundo") iconName = "planet";
            if (route.name === "Notas") iconName = "book";
            if (route.name === "Listas") iconName = "list";
            if (route.name === "Tarefas") iconName = "checkbox";
            if (route.name === "Perfil") iconName = "person";

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Mundo" component={HomeScreen} />
        <Tab.Screen name="Notas" component={NotesScreen} />
        <Tab.Screen name="Listas" component={MissionsScreen} />
        <Tab.Screen name="Tarefas" component={QuestsScreen} />
        <Tab.Screen name="Perfil" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}