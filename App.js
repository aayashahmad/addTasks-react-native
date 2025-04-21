import { useState } from "react";

import { StyleSheet, View, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import OverGameScreen from "./screens/OverGameScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";


export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setgameIsOver] = useState(true);
  const [GuessNumbers, setGuessNumbers] = useState(0);

  const [fontsloaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsloaded) {
    return <AppLoading />;
  }

  function startGameHandler(selectedNumber) {
    setUserNumber(selectedNumber);
    setgameIsOver(false);
  }

  function GameOverHandler(NumberOfRounds) {
    setgameIsOver(true);
    setGuessNumbers(NumberOfRounds );
  }
  function reStartGameOverHandler() {
    // setgameIsOver(false);
    setUserNumber(null);
    setGuessNumbers(0);
  }

  let screen = <StartGameScreen onSelectedNumber={startGameHandler} />;
  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={GameOverHandler} />
    );
  }
  if (gameIsOver && userNumber) {
    screen = (
      <OverGameScreen
        roundsNumber={GuessNumbers}
        userNumber={userNumber}
        onRestartGame={reStartGameOverHandler}
      />
    );
  }

  return (
    <>
    <StatusBar style="light"/> 
    <LinearGradient
      colors={[Colors.accent100, Colors.primary100]}
      style={styles.rootgradient}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootgradient}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootgradient}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootgradient: {
    flex: 1,
    // flexDirection: 'row',
    alignItems: "center",
    // justifyContent: 'center',
    // backgroundColor:'#ddb52f'
    width: "100%",
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
