import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, StatusBar } from 'react-native';
import CardQuote from './components/card/card.component';
import databaseFactory from './factories/database.factory';
import { useList } from 'react-firebase-hooks/database';

export default function App() {

  const [cards, loading, error] = useList(databaseFactory.createDatabaseService('firebase'));

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#c64242"
      />
      
    <FlatList
      data={cards}
      keyExtractor={item => item.id}
      renderItem={({ item }) =>
        <CardQuote 
          key={item.val().id}
          task={item.val().task}
          background={item.val().background} />
      }>
    </FlatList>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBF5F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});