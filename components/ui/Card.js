import { Dimensions, StyleSheet ,View} from "react-native";
import Colors from "../../constants/colors";


function Card({children}){

    return(
         <View style={styles.card}>
            {children}
         </View>

    )
}
export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
card:{
        alignItems: 'center',
        justifyContent: 'center',
        
        // marginHorizontal: 20,
        marginTop: deviceWidth < 380 ? 18 : 36,
        padding: 16,
        borderRadius: 10,
        backgroundColor: Colors.primary100,
        elevation: 5, //only works on android
        // shadowColor: 'black',
        // shadowOffset: { width: 0, height: 2 },
        // shadowRadius: 6,
        // shadowOpacity: 9,   
    }
})


