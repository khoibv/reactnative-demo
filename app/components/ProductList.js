import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import ProductItem from './ProductItem';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {useAppContext} from '../AppContext';
import {useNavigation} from '@react-navigation/native';

export default function ProductList() {
  const [searchKey, setSearchKey] = useState('');
  const [products, setProductList] = useState([]);
  const {countProducts} = useAppContext();
  const navigation = useNavigation();

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((response) => response.json())
      .then((json) => {
        console.log('response', json);
        setProductList(json);
      })
      .catch((err) => console.log('error', err));
  }, []);

  const _renderProduct = (product) => {
    return <ProductItem product={product} key={product.id} />;
  };

  const _showShoppingCart = () => {
    navigation.navigate('ShoppingCart');
  };

  return (
    <SafeAreaView>
      <View style={styles.searchBar}>
        <TextInput
          defaultValue={searchKey}
          onChangeText={(text) => setSearchKey(text)}
          style={styles.searchInput}
        />
        <Icon name="magnify" size={32} style={{color: '#F5A942'}} />
        <TouchableOpacity
          style={{flexDirection: 'row'}}
          onPress={_showShoppingCart}>
          <Icon name="cart-outline" size={32} style={{color: '#4EBC7A'}} />
          <Text style={{color: '#E93E43'}}>{countProducts()}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={products.filter((p) => p.title.indexOf(searchKey) >= 0)}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => _renderProduct(item)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  searchInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#F5A942',
    padding: 4,
    flex: 1,
  },
});
