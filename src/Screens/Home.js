import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'

import Novidades from '../Components/Novidades';
import Roupas from '../Components/Roupas';

export default function Home() {
    const novidades = [
        {id: 1, nome: 'Chinelos', imagem: 'https://images.unsplash.com/photo-1617370653117-ff3a94af6cef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmxpcCUyMGZsb3BzfGVufDB8fDB8fA%3D%3D&w=1000&q=80'},
        {id: 2, nome: 'Chapéu', imagem: 'https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGF0c3xlbnwwfHwwfHw%3D&w=1000&q=80' }
    ];

    const promocoes = [
        {id: 1, nome: 'Terno', preco: 'R$ 1000,00', imagem: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3VpdHxlbnwwfHwwfHw%3D&w=1000&q=80'},
        {id: 2, nome: 'Tênis', preco: 'R$ 50,00', imagem: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNob2VzfGVufDB8fDB8fA%3D%3D&w=1000&q=80' },
        {id: 3, nome: 'Calça Jeans', preco: 'R$ 80,00', imagem: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8amVhbnN8ZW58MHx8MHx8&w=1000&q=80' },
        

    ]

    return(
      <ScrollView style={style.container}>
          <Text style={style.titulo}><Icon name="shirt" size={26} /> Novidades</Text>
            
            <View style={{flex: 1}}>
            <FlatList 
                data={novidades}
                renderItem={({item}) => Novidades({item})}
                key={(item) => item.id}
                horizontal={true}
            />
            </View>

            <View style={{flex: 1, marginBottom: 15}}>
                <Text style={style.titulo}><Icon2 name="sale" size={26} />Promoções</Text>
                
                <FlatList 
                data={promocoes}
                renderItem={({item}) => (Roupas({item}))}
                key={(item) => item.id}
                horizontal={true}
                />
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