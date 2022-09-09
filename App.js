
import { Button,Pressable,ScrollView,FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  const [modalIsVisible,setModalIsVisible ] = useState(false);
  
  const [courseGoals,setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }
  
  function addGoalHandler(enteredGoalText) {
   setCourseGoals((currentCourseGoals) => [
    ...currentCourseGoals,
    {text: enteredGoalText, id: Math.random().toString()},
  ]);
  endAddGoalHandler();
  }

  function deleteGoalHandler(id){
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    })
  }
  

  return (
    <>
 <StatusBar style='light' />
   
   <View style={styles.appContainer}>
   
    <Button
    onPress={startAddGoalHandler}
    title="Add New Goal" color='#a065ec' />
    

     <GoalInput 
     onCancel={endAddGoalHandler}
     visible={modalIsVisible} 
     onAddGoal={addGoalHandler}/>
      <View style={styles.goalsContainer}>
      <FlatList 
      
      renderItem={(itemData) => {
        
        return (
        <GoalItem id={itemData.item.id} onDeleteItem={deleteGoalHandler} text={itemData.item.text} /> 
        )
      }}
      data={courseGoals}
      keyExtractor={(item, index) => {
        return item.id;
      }}
      alwaysBounceVertical={false} />
          
          
           
    
    
      </View>
      
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop:70,
    paddingHorizontal:16,
    
  },
  goalsContainer:{
    flex:5
  },

  
});
