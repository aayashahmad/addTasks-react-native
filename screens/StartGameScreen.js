import  {useState} from 'react';
import { View, StyleSheet, TextInput, Alert ,Text, Dimensions, useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton'
import Colors from '../constants/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';


  function StartGameScreen({onSelectedNumber}) {
 const [enteredValue, setEnteredValue] = useState('');

 function resetInputHandler(){ 
  setEnteredValue('');
}

const {width, height} = useWindowDimensions();

  function numberInputHandler(enteredValue){
  setEnteredValue(enteredValue.replace(/([^0-9])/g, ''));
  }
  function ConfirmInputHandler(){
    const chosenNumber = parseInt(enteredValue);

    if(chosenNumber <= 0 || chosenNumber > 99 || isNaN(chosenNumber)){
      Alert.alert('Invalid Number!', 
        'Number has to be between 1 and 99.',
         [{text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
        );
        
    
    }
  
    onSelectedNumber(chosenNumber);
  }
  const marginHeight = height < 380 ? 100 : 30;
  
  return (
    // <ScrollView  style={styles.screen}>
    // <KeyboardAvoidingView style={styles.screen} behavior="position">
<View style={[styles.rootContainer,{marginTop: marginHeight}]} >
  <Title>Guess my Number</Title>

 <Card>
 <InstructionText>Enter the Number</InstructionText>
    <TextInput 
     style={styles.numberInput}
     maxLength={2} 
     keyboardType={'number-pad'} 
     onChangeText={numberInputHandler}
     value={enteredValue}
     
     />
     
    <View style={styles.buttonContainer}>
      <View style={styles.buttonInnerContainer} >
        <PrimaryButton onPress={resetInputHandler}> Reset </PrimaryButton>
        </View>
        <View style={styles.buttonInnerContainer}>
        <PrimaryButton onPress={ConfirmInputHandler}> Confirm </PrimaryButton>
        </View>
        </View>
    </Card>
    </View>
    // </KeyboardAvoidingView>
    // </ScrollView>
  );
}
export default StartGameScreen;

// const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles= StyleSheet.create({
  rootContainer:{
    flex: 1,
    // marginTop: deviceHeight < 380 ? 30 : 100,
    width: deviceWidth < 380 ? 150 : '90%',
    // margin:'auto'

  },
  screen: {
    flex: 1,
    
  },

    numberInput:{
     
      
      height: 50,
      width: 50,
      fontSize: 24,
      borderBottomWidth: 2,
      borderBottomColor:Colors.accent100,
      color:Colors.accent100,
      fontWeight: 'bold', 
      marginVertical: 20,
      textAlign: 'center',
    },
    inputText:{
  
    },
    buttonContainer:{
    
      flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    buttonInnerContainer:{
      flex:1,
    }
 


});