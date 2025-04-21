import { View, Text,StyleSheet, Pressable, Button} from "react-native";
import Colors from "../../constants/colors";

function PrimaryButton({children,onPress}) {

    

    return ( 
    <View style={styles.ButtonOutterContainer}>

    <Pressable style={styles.ButtonInnerContainer} 
     onPress={onPress}
     android_ripple={{color :Colors.primary100}} >
    
        <Text style={styles.ButtonText}>{children}</Text>
    </Pressable>
    </View>

);
}
export default PrimaryButton;


const styles = StyleSheet.create({
    ButtonOutterContainer:{
        borderRadius: 100,
        
        margin:4,
        overflow: 'hidden',
        outline: 'none',
        // overflowX: 'hidden',
    },
    

    ButtonInnerContainer:{
        backgroundColor: Colors.primary300,
        // borderRadius: 100,
        // flex:1, 
        paddingHorizontal:30,
        
        overflow: 'hidden',
        outline: 'none',
       
    },
    ButtonText:{
        color: 'white',
        fontSize: 20,
        padding: 10,
        textAlign: 'center',
    }
        

});