import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./navigation/AppNavigator";
import { AuthProvider } from "./context/AuthContext";
import { KanjiProvider } from "./context/KanjiContext";

export default function App() {
  return (
    <AuthProvider>
      <KanjiProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </KanjiProvider>
    </AuthProvider>
  );
}
