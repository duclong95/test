import React, { Component } from 'react'
import { View } from 'react-native'
import TabNavigator from 'react-native-tab-navigator'
import Icon from 'react-native-vector-icons/MaterialIcons'
import TabMenu from './tabMenu'

export default class TabNav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home'
        }
    }

    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'feed'}
                    renderIcon={() => <Icon name="assignment" size={30} color="#919CA6" />}
                    renderSelectedIcon={() => <Icon name="assignment" size={30} color="#3C90E8" />}
                    onPress={() => this.setState({ selectedTab: 'feed' })}>
                    <View></View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'friend'}
                    renderIcon={() => <Icon name="supervisor-account" size={30} color="#919CA6" />}
                    renderSelectedIcon={() => <Icon name="supervisor-account" size={30} color="#3C90E8" />}
                    onPress={() => this.setState({ selectedTab: 'friend' })}>
                    <View></View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'notification'}
                    renderIcon={() => <Icon name="notifications" size={30} color="#919CA6" />}
                    renderSelectedIcon={() => <Icon name="notifications" size={30} color="#3C90E8" />}
                    badgeText="1"
                    onPress={() => this.setState({ selectedTab: 'notification' })}>
                    <View></View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'menu'}
                    renderIcon={() => <Icon name="menu" size={30} color="#919CA6" />}
                    renderSelectedIcon={() => <Icon name="menu" size={30} color="#3C90E8" />}
                    onPress={() => this.setState({ selectedTab: 'menu' })}>
                    <TabMenu></TabMenu>
                </TabNavigator.Item>
            </TabNavigator>
        )
    }
}

