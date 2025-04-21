import { StyleSheet,Text ,Platform} from "react-native";

function Title({ children }) {
  return <Text style={styles.gametitle}>{children}</Text>;
}

const styles = StyleSheet.create({
  
    gametitle:{
        fontFamily:'open-sans-bold',
        fontSize: 24,
        //  fontWeight: 'bold',
         color: '#7F0745',
         textAlign: 'center',
        //  borderWidth: Platform.OS === 'android' ? 2 :0,
         borderWidth  : Platform.select({ios:0 , android : 2}),
            borderColor: '#7F0745',
            padding: 10,
            // width: '100%',
            marginTop: 30,
            // marginHorizontal: 'auto',
         
         
       
  },
});


export default Title;