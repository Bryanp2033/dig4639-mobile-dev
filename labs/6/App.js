import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Questions from './components/Questions'

class App extends React.Component {
  render(){
  return (
    <View style={styles.container}>
      {/* <Text>Welcome to Random Quiz Text</Text>
      <Text>Made by Bryan Porras</Text> */}

      <Questions/>
    </View>

  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25,
  },
});

export default App;