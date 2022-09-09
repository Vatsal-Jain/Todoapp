import {Image,StyleSheet,View,Modal,TextInput,Button} from 'react-native';
import {useState} from 'react'

function GoalInput(props) {
    
    const [enteredGoalText,setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
    
        setEnteredGoalText(enteredText)
      }

      function addGoalHandler() {
        if(enteredGoalText){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
        }
      }
    

    return(
        <Modal 
        statusBarTranslucent={true}
        visible={props.visible} animationType="fade">
    <View style={styles.inputContainer}>
        <Image 
        source={require('../assets/images/goal.png')}
        style={styles.image}
        />
    <TextInput 
    style={styles.textinput}
    onChangeText={goalInputHandler}
    value={enteredGoalText}
    placeholder='Your Goals'
    placeholderTextColor={'grey'}
    />
    <View style={styles.buttonContainer}>
        <View style={styles.button}>
    <Button 
    color="#b180f0"
    title='Add Goal' onPress={addGoalHandler}/>
    </View>
    <View style={styles.button}>
    <Button 
    color='#f31282'
    title='Cancel' onPress={props.onCancel}/>
    </View>
    </View>
    
    </View>
    </Modal>
)
};

const styles = StyleSheet.create({
    
  inputContainer:{
    flex:1,
    padding:16,
    justifyContent:'center',
    alignItems:'center',
    
    
    
    
    backgroundColor:'#311b6b'

  },
  textinput:{
    width:'100%',
    borderWidth:1,
    borderColor:'#e4d0ff',
   backgroundColor:'#e4d0ff',
   color:'#120438',
   borderRadius:6,
    padding:14
    
  },
  image:{
width:100,
height:100,
margin:20
  },
  buttonContainer:{
    flexDirection:'row',
    marginTop:16
    
  },
  button:{
    width:'30%',
    marginHorizontal:8
  }
})

export default GoalInput;