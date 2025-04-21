import React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, View, Text, Alert, FlatList,useWindowDimensions } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import GuessLogList from "../components/game/GuessLogList";
// import Ionicons from "@expo/vector-icons";
// import Colors from "../constants/colors";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setcurrentGuess] = useState(initialGuess);
  const [roundsNumber, setroundsNumber] = useState([initialGuess]);
  const {height, width} = useWindowDimensions();

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that is wrong!...", [
        { text: "sorry!", style: "cancle" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    console.log(minBoundary, maxBoundary);
    setcurrentGuess(newRndNumber);
    setroundsNumber(prevroundsNumber=>[newRndNumber, ...prevroundsNumber]);
  }

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(roundsNumber.length);
    }
  }, [currentGuess, userNumber, onGameOver]);
  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
    
  },[]);

  const guessRoundslistLength = roundsNumber.length;

  let content =(
    <>
     <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText>HIGHER or LOWER</InstructionText>
        <View style={styles.buttoncontainer}>
          <View>
            <PrimaryButton
              style={styles.btt}
              onPress={nextGuessHandler.bind(this, "lower")}
            >
              {/* <Ionicons  name='md-remove' size={24} color="white"/> */}-
            </PrimaryButton>
          </View>
          <View>
            <PrimaryButton
              style={styles.btt}
              onPress={nextGuessHandler.bind(this, "greater")}
            >
              {/* <Ionicons  name='md-add' size={24} color="white"/> */}+
            </PrimaryButton>
          </View>
        </View>
      </Card>

    </>
  )

  if (width > 500){
    content = <>
         <InstructionText>HIGHER or LOWER</InstructionText>
        

         <View style={styles.buttoncontainerWide}>
          <View style={styles.buttoncontainer}>
            <PrimaryButton
              style={styles.btt}
              onPress={nextGuessHandler.bind(this, "lower")}
            >
              {/* <Ionicons  name='md-remove' size={24} color="white"/> */}-
            </PrimaryButton>
          </View>

         <NumberContainer>{currentGuess}</NumberContainer>

          <View style={styles.buttoncontainer}>
            <PrimaryButton
              style={styles.btt}
              onPress={nextGuessHandler.bind(this, "greater")}
            >
              {/* <Ionicons  name='md-add' size={24} color="white"/> */}+
            </PrimaryButton>
          </View>
        </View>


        
 


    </>
  }

  return (
    <View style={styles.gameContainer}>
      <Title>Opponent's Guess</Title>
      {content}
      <View style={styles.roundsNumber} >
        {/* {roundsNumber.map(roundsNum => <InstructionText key={roundsNum}>{roundsNum}</InstructionText>)}; */}
        <FlatList data={roundsNumber}  renderItem={(itemData)=> 
          <GuessLogList  roundNumber={guessRoundslistLength - itemData.index} Guess={ itemData.item}
          />} 
          keyExtractor={(item)=>item}/>
       
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  gameContainer: {
    margin: 0,
    flex: 1,
    padding: 24,
  },
  buttoncontainerWide:{
    flexDirection: "row",
    alignItems:" center",
    justifyContent: "center",
  },
  buttoncontainer: {
    // flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    //  width: 100,
  },
  roundsNumber:{
    marginTop: 20,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    
  }
});

export default GameScreen;
