import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { TodoInput } from './components/todoInput';
import { TodoItem, TodoItemData } from './components/todoItem'

const STORAGE_KEY = '@todo_list_items';

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
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const storedValue = await AsyncStorage.getItem(STORAGE_KEY);
        if (storedValue !== null) {
          setTodos(JSON.parse(storedValue) as TodoItemData[]);
        }
      } catch (error) {
        console.error('Failed to load todos:', error);
      } finally {
        setIsLoaded(true);
      }
    };

    loadTodos();
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    const saveTodos = async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
      } catch (error) {
        console.error('Failed to save todos:', error);
      }
    };

    saveTodos();
  }, [todos, isLoaded]);
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
});
