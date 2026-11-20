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
  const handleToggleTodo = (id: string) => {
    console.log('toggle id:', id);
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <TodoInput onAddTodo={handleAddTodo} />

      <ScrollView>
        {todos.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            onToggleTodo={handleToggleTodo}
          />
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
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  itemText: {
    fontSize: 16,
  },
});
