import { useContext, useEffect } from 'react';
import { PetContext } from '../contexts/PetContext';
import { ScrollView, View, StyleSheet, Image, Text, FlatList } from 'react-native';
import { IconButton, List } from 'react-native-paper';
import estilos from './estilos';

const ListaPets = () => {
  // const contexto = useContext(ProdutoContext); //traz produtos e setProdutos (todo o contexto)
  const { pets, listarPet } = useContext(PetContext);

  useEffect(() => {
    listarPet()
  }, [])

  return (
    <View style={{alignItems: 'center', justifyContent: 'space-between'}}>
      <ScrollView horizontal>
        {pets.map((pet) => (
          <List.Item
            key={pet.id}
            title={pet.nome}
            description={pet.especie}    
          />
        ))}
      </ScrollView>
    </View>
  );
};

  export default ListaPets

