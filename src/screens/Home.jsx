import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Animated,
} from 'react-native';

const Data = [
  { id: 1, label: 'copi susu', price: 'Rp. 3000' },
  { id: 2, label: 'copi manis', price: 'Rp. 4000' },
  { id: 3, label: 'jas jus', price: 'Rp. 1000' },
  { id: 4, label: 'teh manis', price: 'Rp. 3000' },
  { id: 5, label: 'es jeruk', price: 'Rp. 5000' },
  { id: 6, label: 'joshua', price: 'Rp. 7000' },
  { id: 7, label: 'drink', price: 'Rp. 6000' },
  { id: 8, label: 'boba', price: 'Rp. 8000' },
  { id: 9, label: 'capucinho', price: 'Rp. 7000' },
  { id: 10, label: 'copi', price: 'Rp. 2000' },
];

const Home = ({ navigation }) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const checkoutScale = new Animated.Value(1);

  const checkoutAnimation = () => {
    setIsCheckingOut(true);
    Animated.timing(checkoutScale, {
      toValue: 0.9,
      duration: 100,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(checkoutScale, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }).start(() => {
        navigation.navigate('Pesan');
        setIsCheckingOut(false);
      });
    });
  };

  return (
    <ImageBackground
      source={require('../assets/br (1).jpeg')}
      style={styles.background}>
      <View style={styles.container}>
        <View style={styles.menuContainer}>
          {Data.map(item => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.menuItem,
                { backgroundColor: '#3E2723' },
                isCheckingOut && { transform: [{ scale: checkoutScale }] },
              ]}
              onPress={() => {
                navigation.navigate('Detail', { item });
              }}>
              <Text style={styles.menuText}>{item.label}</Text>
              <Text style={styles.menuPrice}>{item.price}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          onPress={checkoutAnimation}
          style={styles.btn}
          disabled={isCheckingOut}>
          <Text style={styles.txt}>Pesan Sekarang</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    backgroundColor: '#eddcd2',
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  menuItem: {
    width: '40%',
    margin: '5%',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  menuText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  menuPrice: {
    fontSize: 14,
    color: '#fff',
    marginTop: 5, // Adding margin-top for spacing
  },
  btn: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    backgroundColor: '#3E2723',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    marginBottom: 20,
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
