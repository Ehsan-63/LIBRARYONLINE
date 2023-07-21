import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';

const searchData = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Cherry' },
  { id: 4, name: 'Date' },
  { id: 5, name: 'Elderberry' },
  // ... add more data here
];

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const filteredData = searchData.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredData);
  };

  return (
    <View>
      <TextInput
        placeholder="Search"
        value={query}
        onChangeText={text => setQuery(text)}
      />
      <Button title="Search" onPress={handleSearch} />

      <FlatList
        data={results}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default SearchScreen;
