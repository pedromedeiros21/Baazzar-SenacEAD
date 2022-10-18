import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const Sobre = () => {
  return (
    <View style={styles.container}>
      <Text>Esta é a tela sobre a loja.</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Sobre;