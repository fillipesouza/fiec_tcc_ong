import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux'
import {
    StyleSheet,
    Text,
    ScrollView,
    ActivityIndicator,
    View,
    FlatList,
    Button,
    Image,

} from "react-native";

const OngSubscribeScreen = props => {
    const { ong } = props.route.params;
    return (
        <View style={styles.container}>
            <Text>{ong.title}</Text>
            <Image style={styles.image} source={{ uri: ong.imageUrl }} />
            <Text>Nos siga para conhecer mais sobre a gente!</Text>
            <Button title="Follow Me!!!" color="blue" />
        </View>
    );
}

export default OngSubscribeScreen;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '60%',
        height: 400
    }
})