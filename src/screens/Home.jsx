import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Image,
  PanResponder,
  ScrollView,
} from 'react-native';

const Data = [
  {
    id: 1,
    label: 'copi susu',
    price: 'Rp. 3000',
    image: require('../assets/copi_susu.jpeg'),
  },
  {
    id: 2,
    label: 'copi manis',
    price: 'Rp. 4000',
    image: require('../assets/copi_manis.jpeg'),
  },
  {
    id: 3,
    label: 'jas jus',
    price: 'Rp. 1000',
    image: require('../assets/jas_jus.jpeg'),
  },
  {
    id: 4,
    label: 'teh manis',
    price: 'Rp. 3000',
    image: require('../assets/teh_manis.jpeg'),
  },
  {
    id: 5,
    label: 'es jeruk',
    price: 'Rp. 5000',
    image: require('../assets/es_jeruk.jpeg'),
  },
  {
    id: 6,
    label: 'joshua',
    price: 'Rp. 7000',
    image: require('../assets/joshua.jpeg'),
  },
  {
    id: 7,
    label: 'drink',
    price: 'Rp. 6000',
    image: require('../assets/drink.jpeg'),
  },
  {
    id: 8,
    label: 'boba',
    price: 'Rp. 8000',
    image: require('../assets/boba.jpeg'),
  },
  {
    id: 9,
    label: 'capucinho',
    price: 'Rp. 7000',
    image: require('../assets/capucinho.jpeg'),
  },
  {
    id: 10,
    label: 'copi',
    price: 'Rp. 2000',
    image: require('../assets/copi.jpeg'),
  },
  {
    id: 11,
    label: 'alpukat',
    price: 'Rp. 7000',
    image: require('../assets/alpukat.jpeg'),
  },
  {
    id: 12,
    label: 'semangka',
    price: 'Rp. 2000',
    image: require('../assets/semangka.jpeg'),
  },
  {
    id: 13,
    label: 'margisa',
    price: 'Rp. 7000',
    image: require('../assets/margisa.jpeg'),
  },
  {
    id: 14,
    label: 'mangga',
    price: 'Rp. 2000',
    image: require('../assets/mangga.jpeg'),
  },
];

const Home = ({navigation}) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const totalY = useRef(0);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        totalY.current += gestureState.dy;
        if (Math.abs(totalY.current) >= 50) {
          const sensitivityScale = 0.5;
          Animated.event([null, {dy: animatedValue}], {
            useNativeDriver: false,
          })(evt, {dy: gestureState.dy * sensitivityScale});
          totalY.current = 0;
        }
      },
      onPanResponderRelease: () => {
        // Add logic here if needed
      },
    }),
  ).current;

  const checkoutAnimation = () => {
    setIsCheckingOut(true);
    Animated.timing(animatedValue, {
      toValue: isCheckingOut ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setIsCheckingOut(!isCheckingOut);
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.menuContainer}>
          <Animated.View
            {...panResponder.panHandlers}
            style={[
              styles.menuItems,
              {
                transform: [
                  {
                    translateY: animatedValue.interpolate({
                      inputRange: [-100, 0, 100],
                      outputRange: [-50, 0, 50],
                    }),
                  },
                ],
              },
            ]}>
            {Data.map(item => (
              <TouchableOpacity
                key={item.id}
                style={[styles.menuItem, {backgroundColor: '#3E2723'}]}
                onPress={() => {
                  navigation.navigate('Detail', {item});
                }}>
                <Image source={item.image} style={styles.menuImage} />
                <Text style={styles.menuText}>{item.label}</Text>
                <Text style={styles.menuPrice}>{item.price}</Text>
              </TouchableOpacity>
            ))}
          </Animated.View>
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={checkoutAnimation}
        style={styles.btn}
        disabled={isCheckingOut}>
        <Text style={styles.btnText}>Pesan Sekarang</Text>
      </TouchableOpacity>
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
    backgroundColor: '#eddcd2', // Background color changed to milk chocolate
  },
  menuContainer: {
    justifyContent: 'flex-end',
  },
  menuItems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  menuItem: {
    width: '40%',
    margin: 10,
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
  },
  btn: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 25,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
