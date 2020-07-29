import React from 'react';
import './NewGoal.css';
import GoalList from '../GoalList/GoalList';

const NewGoal = props => {

  const [enteredText, setEnteredText] = "";

  // Creates the newGoal, stores in memory;
  const addGoalHandler = event => {
    event.preventDefault();

    const newGoal = {
      id: Math.random().toString(),
      text: enteredText
    };
    // This resets the input field after submit;
    // The text is still stored inside "newGoal.text";
    setEnteredText('');

    // Add an onAddGoal prop to our NewGoal component;
    props.onAddGoal(newGoal);
  };

  // Create "event" object that will store the value of text input;
  const textChangeHandler = event => {
    setEnteredText(event.target.value);
  };

  return (
    < form className="new-goal" onSubmit={addGoalHandler}>
      <input type="text" value={enteredText} onChange={textChangeHandler}/>
      <button type="submit">Add Goal</button>
  </form >
  );
};




export default NewGoal;
