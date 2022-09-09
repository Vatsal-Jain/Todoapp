import {StyleSheet,View,Text,Pressable} from 'react-native'
import { Feather } from '@expo/vector-icons';
function GoalItem(props){
 
    

return (
    <View style={styles.goalItem}>
    <Text style={styles.goalText}>{props.text}</Text> 
    <Pressable
    style={({pressed}) => pressed && styles.pressedItem  }
    android_ripple={{color:'#4B0150'}}  
    onPress={props.onDeleteItem.bind(this, props.id)}>
 
    <Feather name="delete" size={24} color="#f31282" />
  
    </Pressable>

    </View>
)
};

const styles = StyleSheet.create({
    goalItem:{
        margin:8,
    
       
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
        
    },
    pressedItem:{
   opacity:0.5
    },
    goalText:{
        color:'white',
        padding:6,
        backgroundColor:'#5e0acc',
        width:'90%',
        borderRadius:6,
        
        
       
        fontWeight:'bold',
    }
})

export default GoalItem;