import React from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

function ToDoForm({addTask}) {
  const [task, setTask] = React.useState('');

  const handleChangeText = (text) => {
    setTask(text);
  };
  const handlePress = () => {
    addTask(task);

    setTask('');
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        onChangeText={handleChangeText}
        placeholder="Add a new task..."
        value={task}
      />
      <Button title="Add" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});
export default ToDoForm;