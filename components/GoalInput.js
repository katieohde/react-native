import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const addGoalHandler = (goalTitle) => {
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: enteredGoal }]);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput        
        placeholder="Course Goal" 
        style={styles.inputItem}
        onChangeText={goalInputHandler}
        value={enteredGoal} />
      <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row', 
    justifyContent: "space-between", 
    alignItems: 'center'
  },  
  inputItem: {
    borderBottomColor: 'black', 
    borderBottomWidth: 1, 
    padding: 10, width: '80%'
  }
});

export default GoalInput;