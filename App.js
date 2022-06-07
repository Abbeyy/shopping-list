import React, {useState} from 'react';
import {Text, View, StyleSheet, FlatList, Alert} from 'react-native';
import {nanoid} from 'nanoid/non-secure';
import AddItem from './components/AddItem';
import Header from './components/Header';
import ListItem from './components/ListItem';
import data from './data.json';

//Tutorial taken by Traversy Media on Youtube 'RN Crash Course 2020'

const App = () => {
  const [items, setItems] = useState(data.items);

  const deleteItem = idToDelete => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== idToDelete);
    });
  };

  const addItem = text => {
    if (!text) {
      Alert.alert('Error', 'Please enter a value', {text: 'Ok'});
    } else {
      setItems(prevItems => {
        return [...prevItems, {id: nanoid(), text}];
      });
    }
  };

  return (
    <View style={styles.shoppingListWrapper}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  shoppingListWrapper: {
    flex: 1,
  },
});

export default App;
