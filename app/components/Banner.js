import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const Banner = () => {
    return (
        <View style={bannerStyles.container}>
            <Image 
                style={[bannerStyles.image, bannerStyles.first]}
                source={require('../assets/images/dp3.png')}
            />
            <View style={bannerStyles.imageTextContainer}>
                <Image 
                    style={[bannerStyles.image, bannerStyles.second]}
                    source={require('../assets/images/dp.png')}
                />
                <Text style={bannerStyles.text}>eat better not less</Text>
            </View>
            <Image 
                style={[bannerStyles.image, bannerStyles.third]}
                source={require('../assets/images/dp1.png')}
            />
        </View>
    );
};

const bannerStyles = StyleSheet.create({
    container: {
        backgroundColor: '#ed4949',
        width: '100%',
        height: 312,
        borderRadius: 10,
        overflow: 'hidden',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: -10,
    },
    imageTextContainer: {
        width: 130,
        height: 130,
    },  
    image: {
        width: 117,
        height: 'auto',
    },
    text: {
        color: '#fff',
        fontSize: 13,
        fontWeight: 'bold',
        fontFamily: 'Red Rose',
        textAlign: 'center',
    },  
    first: {
        width: 117,
        height: 117,
        borderRadius: 117 / 2,
        marginLeft: -50,
    },
    second: {
        width: 117,
        height: 117,
        borderRadius: 117 / 2,
    },
    third: {
        width: 117,
        height: 117,
        borderRadius: 117 / 2,
        marginRight: -50,
    }
});

export default Banner;