
import React from 'react';
import { Image, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Section6() {
    return (
        <View style = {{flexDirection : 'column',borderTopWidth : 1 , borderBottomWidth : 1, marginHorizontal: 20 , paddingVertical : 10}}>
            <Text style={{fontSize : 25}}>Location</Text>

            <Text>218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et…</Text>
            
            <View>
                <Image style={{flex :1, resizeMode : 'cover' , aspectRatio :20/9}} source={require('../../assets/week3/map.jpg')}/>
            </View>
        </View>
    );
}