import React, { useState } from 'react';
import './App.css';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

const App = () => {

  // Declare courseGoals State hook;
  const [courseGoals, setCourseGoals] = useState([
    { id: 'cg1', text: "Learn the Topic" },
    { id: 'cg2', text: "Learn the Topics" },
    { id: 'cg3', text: "Help other students in the course Q & A" }
  ]);

  const addNewGoalHandler = newGoal => {
    // .concat() returns OG array with new item appended;
    // leaves OG array alone;
    // We pass our newGoal to setCourseGoals Hook to change State;
    // setCourseGoals(courseGoals.concat(newGoal));
    // The following approach is bulletproof for when state
    // update depends on the previously State;
    setCourseGoals((prevCourseGoals) => {
      return prevCourseGoals.concat(newGoal);
    });
  };

  return (
    <div className="course-goals">
      <h2 >Course Goals</h2>
      {/*
        Here we create a goals attribute on this instance of GoalList;
        goals refers to the courseGoals JS array;
        Inside GoalList.js, we refer to the GoalList's props parameter;
        GoalList.js then renders each item in the array as a <li> element,
        distinguishing them by giving each <li> a key attribute=to that item's 'id'
        attribute, and displaying their text, both by using {}, as in:

        props.goals( (goal) => {
          return <li key={goal.id}>{goal.text}</li>;
        });
      */}
      <NewGoal onAddGoal={addNewGoalHandler}/>
      <GoalList goals={courseGoals}/>
    </div>
  );
};

export default App;
