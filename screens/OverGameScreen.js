import { View, Image, StyleSheet, Text, Dimensions, useWindowDimensions,ScrollView} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";

function OverGameScreen({ roundsNumber, userNumber, onRestartGame }) {
const {width, height}= useWindowDimensions();

let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize =80;
  }

  const imgStyle ={
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  }
  
  return (
    <ScrollView style={styles.screen}>
    <View style={styles.overGameContainer}>
      <Title style={styles.title}>Game Over!</Title>
      <View style={[styles.imageContainer , imgStyle]}>
        <Image
          style={[styles.Image,imgStyle]}
          source={require("../assets/images/success.png")}
        />
      </View>
      <InstructionText>
        Your Phone Needed <Text style={styles.textXY}>{roundsNumber}</Text>{" "}
        Rounds To Guess The Number{" "}
        <Text style={styles.textXY}>{userNumber}</Text>.
      </InstructionText>
      <PrimaryButton onPress={onRestartGame}>Start New Game</PrimaryButton>
    </View>
    </ScrollView>
  );
}

export default OverGameScreen;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  screen:{
    flex: 1,
  },
  overGameContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    margin: 40,
  },
  imageContainer: {
    width: 200,
    height: 200,
    // borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.primary100,
    overflow: "hidden",
    margin: 36,
  },
  Image: {
    // width: deviceWidth < 380 ? 150 : '100%' ,
    // height: deviceWidth < 380 ? 150 : '100%',
    // resizeMode: 'contain',
  },
  textXY: {
    color: Colors.primary100,
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
