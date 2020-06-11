import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useAppContext} from '../AppContext';
import ProductItem from './ProductItem';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

export default function ShoppingCart() {
  const {shoppingCart} = useAppContext();

  const _renderCart = () => {
    console.log('Render cart', shoppingCart);
    shoppingCart.map((product) => <ProductItem product={product} />);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <FlatList
          data={shoppingCart}
          renderItem={({item}) => (
            <View>
              <ProductItem product={item} />
              <Text>Count: {item.count}</Text>
            </View>
          )}
          keyExtractor={(_, index) => index.toString()}
        />

        <Button title="Thanh toán"></Button>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
