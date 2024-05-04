import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Image,
} from 'react-native';

const Data = [
  {
    id: 1,
    label: 'Copi Susu',
    price: 'Rp. 3000',
    image: require('../assets/copi_susu.jpeg'),
  },
  {
    id: 2,
    label: 'Copi Manis',
    price: 'Rp. 4000',
    image: require('../assets/copi_manis.jpeg'),
  },
  {
    id: 3,
    label: 'Jas Jus',
    price: 'Rp. 1000',
    image: require('../assets/jas_jus.jpeg'),
  },
  {
    id: 4,
    label: 'Teh Manis',
    price: 'Rp. 3000',
    image: require('../assets/teh_manis.jpeg'),
  },
  {
    id: 5,
    label: 'Es Jeruk',
    price: 'Rp. 5000',
    image: require('../assets/es_jeruk.jpeg'),
  },
  {
    id: 6,
    label: 'Joshua',
    price: 'Rp. 7000',
    image: require('../assets/joshua.jpeg'),
  },
  {
    id: 7,
    label: 'Drink',
    price: 'Rp. 6000',
    image: require('../assets/drink.jpeg'),
  },
  {
    id: 8,
    label: 'Boba',
    price: 'Rp. 8000',
    image: require('../assets/boba.jpeg'),
  },
  {
    id: 9,
    label: 'Capucinho',
    price: 'Rp. 7000',
    image: require('../assets/capucinho.jpeg'),
  },
  {
    id: 10,
    label: 'Copi',
    price: 'Rp. 2000',
    image: require('../assets/copi.jpeg'),
  },
];

const Home = ({navigation}) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const checkoutScale = new Animated.Value(1);
  const checkoutTranslateY = new Animated.Value(0);

  const checkoutAnimation = () => {
    setIsCheckingOut(true);
    Animated.parallel([
      Animated.timing(checkoutScale, {
        toValue: 0.9,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(checkoutTranslateY, {
        toValue: -10,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start(() => {
      Animated.parallel([
        Animated.timing(checkoutScale, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(checkoutTranslateY, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }),
      ]).start(() => {
        navigation.navigate('Pesan');
        setIsCheckingOut(false);
      });
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        {Data.map(item => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.menuItem,
              isCheckingOut && {transform: [{scale: checkoutScale}]},
            ]}
            onPress={() => {
              navigation.navigate('Detail', {item});
            }}>
            <Image source={item.image} style={styles.menuImage} />
            <Text style={styles.menuText}>{item.label}</Text>
            <Text style={styles.menuPrice}>{item.price}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Animated.View
        style={[
          styles.btnContainer,
          {transform: [{translateY: checkoutTranslateY}]},
        ]}>
        <TouchableOpacity
          onPress={checkoutAnimation}
          style={styles.btn}
          disabled={isCheckingOut}>
          <Text style={styles.txt}>Pesan Sekarang</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eddcd2',
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
    backgroundColor: '#3E2723',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  menuImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 50,
  },
  menuText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  menuPrice: {
    fontSize: 14,
    color: '#fff',
    marginTop: 5,
  },
  btnContainer: {
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
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
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
