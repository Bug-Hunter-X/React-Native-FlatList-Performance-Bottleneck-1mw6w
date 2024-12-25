This solution optimizes the `FlatList` performance using `getItemLayout` and `initialNumToRender` props. `getItemLayout` provides the dimensions of each item, allowing for faster rendering, while `initialNumToRender` controls the initial number of items rendered to reduce initial render time.

```javascript
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const DATA = Array.from({ length: 1000 }, (_, i) => ({ id: i, title: `Item ${i}` }));

const FlatListSolution = () => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };

  const getItemLayout = (data, index) => (
    {
      length: 50,
      offset: 50 * index,
      index,
    }
  );

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      getItemLayout={getItemLayout}
      initialNumToRender={20}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default FlatListSolution;
```