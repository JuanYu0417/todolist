# Todolist


## install Dependencies

install AsyncStorage

```bash
npx expo install @react-native-async-storage/async-storage
```

## AsyncStorage
```tsx
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
```

read and save useEffect
```tsx
const STORAGE_KEY = '@todo_list_items';
```
```tsx
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
  ```
  