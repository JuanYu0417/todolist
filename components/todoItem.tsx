import { StyleSheet, Text, View } from 'react-native';
import { TodoItemData } from '../App';

type TodoItemProps = {
  item: TodoItemData;
};

export function TodoItem({ item }: TodoItemProps) {
  return (
    <View style={styles.row}>
      <Text style={styles.text}>{item.title}</Text>
    </View>
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
});