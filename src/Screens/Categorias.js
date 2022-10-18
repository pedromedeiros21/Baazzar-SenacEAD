import React, { Component, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList, Button } from 'react-native'
import Roupas from '../Components/Roupas';

export default function Categorias() { 

    const rpg = [
      {id: 1, nome: "Terno", preco: 'R$ 1000,00',imagem: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3VpdHxlbnwwfHwwfHw%3D&w=1000&q=80'},
      {id: 2, nome: 'Tênis', preco: 'R$ 50,00', imagem: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNob2VzfGVufDB8fDB8fA%3D%3D&w=1000&q=80' }
    ]

    const acao = [
      {
        id: 1, 
        nome: 'Óculos', 
        preco: 'R$ 500,00',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imagem: 'https://images.unsplash.com/photo-1625591338875-e2cca9de80a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZXllZ2xhc3N8ZW58MHx8MHx8&w=1000&q=80'
      }
    ]
    
    return(
      <ScrollView style={style.container}>

          <Text style={style.titulo}>Acessórios</Text>
            
            <View style={{flex: 1}}>
            <FlatList 
                data={acao}
                renderItem={({item}) => Roupas({item})}
                key={(item) => item.id}
                horizontal={true}
            />
            </View>

            <View style={{flex: 1}}>
                <Text style={style.titulo}>Masculino</Text>
                
                <FlatList 
                data={rpg}
                renderItem={({item}) => (Roupas({item}))}
                key={(item) => item.id}
                horizontal={true}
                />
            </View>

            <View style={{marginBottom: 10}}> 
              {/* Espaçamento para não deixar o conteúdo ser tapado pelo Tab Navigator */}
            </View>
      </ScrollView>
    )
}

const style = StyleSheet.create({
  container: {
      padding: 10,
      flex: 1,
      
  },
  titulo: {
      fontSize: 26,
      fontWeight: 'bold',
      color: 'black'
  }
})