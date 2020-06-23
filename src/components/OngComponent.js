import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import MyCard from './MyCard';

const OngComponent = props => {
    const navigate = () => {
        props.navigation.navigate('OngSubscribe',
            { ong: props.ong }
        );
    }
    return (
        <TouchableOpacity onPress={navigate}>
            <MyCard>
                <View style={styles.ong}>
                    <Image style={styles.image} source={{ uri: props.ong.imageUrl }} />
                    <View style={styles.texts}>
                        <Text>{props.ong.title}</Text>
                        <Text>{props.ong.description}</Text>
                    </View>
                </View>
            </MyCard>
        </TouchableOpacity>
    )
}

export default OngComponent

const styles = StyleSheet.create({
    ong: {
        flexDirection: 'row'
    },
    texts: {
        fontSize: 12,
        marginLeft: 10,
        width: '70%'
    },
    image: {
        width: '30%',
        height: 100
    }
})
