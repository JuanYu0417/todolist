import { Pressable, StyleSheet, Text } from 'react-native';

export type TodoItemData = {
  id: string;
  title: string;
  done: boolean;
};

type TodoItemProps = {
  item: TodoItemData;
  onToggleTodo: (id:string) => void
};

export function TodoItem({ item, onToggleTodo }: TodoItemProps) {
  return (
    <Pressable style={styles.row} onPress={() => onToggleTodo(item.id)}>
      <Text style={[styles.text,item.done && styles.doneText]}>{item.title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  text: {
    fontSize: 16,
    color: '#111',
  },
  doneText: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
});