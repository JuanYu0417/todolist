import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { TodoInput } from './components/todoInput';
import { TodoItem } from './components/todoItem';

export type TodoItemData = {
  id: string;
  title: string;
  done: boolean;
};

export default function App() {
  const [todos, setTodos] = useState<TodoItemData[]>([]);
  const handleAddTodo = (title: string) => {
    const newTodo: TodoItemData = {
      id: Date.now().toString(),
      title,
      done: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <TodoInput onAddTodo={handleAddTodo} />

      <ScrollView>
        {todos.map((item) => (
          <Text key={item.id} style={styles.itemText}>
            • {item.title}
          </Text>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  itemText: {
    fontSize: 16,
  },
});
