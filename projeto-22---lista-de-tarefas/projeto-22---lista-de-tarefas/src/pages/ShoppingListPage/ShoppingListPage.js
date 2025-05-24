import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, TouchableOpacity, Modal } from 'react-native';
import Item from '../../components/Item/Item';
import ItemInput from '../../components/ItemInput/ItemInput';
import { loadTasks, saveTasks } from '../../utils/storage';
import { Ionicons } from '@expo/vector-icons';
import styles from './ShoppingListPageStyle';

export default function ShoppingListPage() {
  const [items, setItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    loadTasks().then(setItems);
  }, []);

  useEffect(() => {
    saveTasks(items);
  }, [items]);

  const addItem = (newItem) => {
    if (!newItem.name || !newItem.quantity) return;
    const updatedItems = [
      ...items,
      { id: Date.now().toString(), ...newItem },
    ];
    setItems(updatedItems);
    setModalVisible(false);
  };

  const deleteItem = (id) => {
    const updated = items.filter((item) => item.id !== id);
    setItems(updated);
  };

  const editItem = (id, updatedItem) => {
    const updated = items.map((item) =>
      item.id === id ? { ...item, ...updatedItem } : item
    );
    setItems(updated);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Compras</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Item
            item={item}
            onDelete={deleteItem}
            onEdit={editItem}
          />
        )}
        ListEmptyComponent={<Text style={styles.empty}>Nenhum item</Text>}
      />

      <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
        <Ionicons name="add" size={32} color="#fff" />
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <ItemInput onCancel={() => setModalVisible(false)} onSave={addItem} />
      </Modal>
    </View>
  );
}