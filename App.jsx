/**
 * My To Do List App
 *
 * @format
 */

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, } from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

function App() {
  const [items, setItems] = React.useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);
  
  const addTask = (taskText) => {
    setItems([...tasks, taskText]);
  };

  return (
    <SafeAreaView>
      <ToDoForm addTask={addTask}/>
      <ToDoList items={items}/>
    </SafeAreaView>
  );
}

export default App;
