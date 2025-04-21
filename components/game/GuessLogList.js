import { Text , View , StyleSheet} from "react-native";
import Colors from "../../constants/colors";

function GuessLogList({roundNumber,Guess}){

return (
    <View  style={styles.guessLogItem}>
      <Text>#{roundNumber}</Text>
      <Text>Opponent's guess: {Guess}</Text>
    </View>

);


}

const styles = StyleSheet.create({
  guessLogItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: Colors.primary100,
    backgroundColor: Colors.accent100,
    borderRadius: 40,
    elevation:4,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    width:"100%",
    
  },
});

export default GuessLogList;
