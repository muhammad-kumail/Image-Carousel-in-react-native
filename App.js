import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import ImageCarousel from './src/imageCarousel';

const IMAGES = [
  { uri: 'https://images.unsplash.com/photo-1590273466070-40c466b4432d?h=500' },
  { uri: 'https://t4.ftcdn.net/jpg/02/42/89/53/360_F_242895340_l82pcAD259Gmm0CD1sc2DTrqnEUibgKC.jpg' },
  { uri: 'https://t4.ftcdn.net/jpg/00/78/89/41/360_F_78894153_6vehwXxxFzCbIyFjmZdrtoqxk219gWnd.jpg' },
  { uri: 'https://st.depositphotos.com/2627989/4694/i/600/depositphotos_46941945-stock-photo-spring-forrest-sunset.jpg' },
];
const IMAGE_WIDTH = Dimensions.get('window').width;

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor='black' />
      <View style={{flex: 1,top: 30}}>
        <ImageCarousel
          data={IMAGES}
          width={400}
          ratio='16:9'
          activeDotColor={'yellow'}
          inActiveDotColor={'white'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
