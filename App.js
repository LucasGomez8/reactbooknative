import { StatusBar } from "expo-status-bar";
import { NativeRouter } from "react-router-native";
import Main from "./client/Main";
import { UserContextProvider } from "./client/context/UserContext";

export default function App() {
  return (
    <UserContextProvider>
      <NativeRouter>
        <StatusBar style={"light"}></StatusBar>
        <Main></Main>
      </NativeRouter>
    </UserContextProvider>
  );
}
