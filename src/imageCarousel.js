import React,{useState, useEffect, useRef} from 'react';
import {StyleSheet,View,Image,Dimensions} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

ImageCarousel.defaultProps = {
    width: Dimensions.get('window').width,
    ratio : '4:3',
    activeDotColor: 'gray',
    inActiveDotColor: 'gray'

}

export default function ImageCarousel({data, width,ratio, activeDotColor, inActiveDotColor}){

    const [activeSlide, setActiveSlide] = useState(0);
    const carouselRef = useRef(null);
    function moderateHeight(r) {
        const [ratioWidth, ratioHeight] = r.split(':').map(Number);
        const height = (width * ratioHeight) / ratioWidth;
        return height;
    }
      

    useEffect(() => {
        const intervalId = setInterval(() => {
          const newIndex = (activeSlide + 1) % data?.length;
          setActiveSlide(newIndex);
          carouselRef.current?.snapToItem(newIndex);
        }, 2000);
        return () => clearInterval(intervalId);
      }, [activeSlide, data?.length]);

   return (
       <View style={{flex: 1}}>
          <Carousel
                // layout='tinder'
                ref={carouselRef}
                data={data}
                style={{borderWidth: 1}}
                renderItem={({item,index})=>{
                    return(
                        <Image source={item} style={[styles.image,{height: moderateHeight(ratio)}]} />
                    );
                }}
                sliderWidth={width}
                itemWidth={width}
                onSnapToItem={(i) => setActiveSlide(i)}
            />
            <Pagination
                dotsLength={data?.length}
                activeDotIndex={activeSlide}
                containerStyle={{position: 'absolute',alignSelf: 'center',top: moderateHeight(ratio)-(moderateHeight(ratio)*.20) }}
                dotStyle={{
                    width: 17,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 8,
                    backgroundColor: activeDotColor
                }}
                inactiveDotStyle={{
                    width: 10,
                    height: 10,
                    backgroundColor: inActiveDotColor
                }}
                inactiveDotOpacity={0.6}
                inactiveDotScale={.6}
            />
       </View>
   );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 200,
        borderRadius: 15,
        resizeMode: 'cover',
    },
})