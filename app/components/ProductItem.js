import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {formatMoney} from '../common/utils';

export default function ProductItem(props) {
  const {product} = props;
  const navigation = useNavigation();

  const selectProduct = () => {
    navigation.navigate('ProductDetails', product);
  };

  return (
    <TouchableOpacity style={styles.productContainer} onPress={selectProduct}>
      <Text style={styles.productTitle}>{product.title}</Text>
      <Image source={{uri: product.img}} style={styles.productImg} />
      <Text>{formatMoney(product.price)}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  productContainer: {
    padding: 8,
    margin: 4,
    backgroundColor: '#E1E1E1',
    borderRadius: 8,
  },
  productTitle: {
    fontWeight: '700',
  },
  productImg: {
    width: 100,
    height: 100,
  },
});
