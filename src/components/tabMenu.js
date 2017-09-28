import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class TabMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                { key: 0, name: 'On This Day', image: 'schedule' },
                { key: 1, name: 'Groups', image: 'people' },
                { key: 2, name: 'Feed', image: 'assignment' },
                { key: 3, name: 'Pages', image: 'assistant-photo' },
                { key: 4, name: 'QR Code', image: 'phone-iphone' },
                { key: 5, name: 'Sport', image: 'group-work' },
                { key: 6, name: 'Cities', image: 'location-city' },
                { key: 7, name: 'Buy and Sell Groups', image: 'local-grocery-store' },
                { key: 8, name: 'Friend', image: 'supervisor-account' },
                { key: 9, name: 'Protect', image: 'sercurity' },
                { key: 10, name: 'Explore Feed', image: 'flight' },
            ]
        }
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.headText}>Explore</Text>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) =>
                        <View style={styles.row}>
                            <Icon style={{ flex: 1, textAlign: 'center' }} name={item.image} size={30} color="#3C90E8" />
                            <View style={{ flex: 5, borderBottomWidth: 0.3 ,flexDirection:'row'}}>
                                <Text style={{ flex: 4 }}>{item.name}</Text>
                                <Icon style={{ flex:1, textAlign:'right' }} name='chevron-right' size={20} color="#919CA6" />
                            </View>
                        </View>
                    }
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor:'#F2F2F0'
    },
    row: {
        padding: 5,
        flexDirection: 'row',
        backgroundColor:'white'
    },
    headText: {
        padding: 15,
        marginTop: 10,
        color: '#919CA6',
        
    },
})