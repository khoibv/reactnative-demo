import React from 'react';
import {StyleSheet, Text, View, Image, Button, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {formatMoney} from '../common/utils';
import {useAppContext} from '../AppContext';

export default function ProductDetails(props) {
  const product = props.route.params;
  const {addProductToCart} = useAppContext();

  const addToCart = () => {
    addProductToCart(product);
  };

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Image source={{uri: product.img}} style={styles.img} />
      </View>
      <View style={{flex: 1, padding: 16}}>
        <Text>{product.title}</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="credit-card" size={24} />
          <Text>{formatMoney(product.price)}</Text>
        </View>
        <FlatList
          data={product.description}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <Text>- {item}</Text>}
        />

        <Button title="Add to shopping cart" onPress={addToCart} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: '100%',
  },
});
