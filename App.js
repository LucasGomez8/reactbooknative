import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter } from 'react-router-native';
import Main from './client/Main';

export default function App() {
  return (
    <NativeRouter>
      <StatusBar style={'light'}></StatusBar>
      <Main></Main>
    </NativeRouter>
  );
}
 