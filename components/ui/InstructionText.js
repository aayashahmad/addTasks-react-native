import { StyleSheet,Text} from "react-native";
import Colors from "../../constants/colors";


function InstructionText({children}){

    return <Text style={styles.InstructionText}>
            {children}
         </Text>

    
}



const styles = StyleSheet.create({
    InstructionText:{
        color: Colors.accent100,
        fontSize: 20,
        // fontWeight: 'bold',
        fontFamily: 'open-sans-bold',
        marginBottom: 8, 
    }
})

export default InstructionText;

