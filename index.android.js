/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import TabNavigator from 'react-native-tab-navigator';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

class TabNavigatorTest extends React.Component {
  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="Home"
          renderIcon={() => <Image source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} />}
          renderSelectedIcon={() => <Image source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} />}
          badgeText="1"
          onPress={() => this.setState({ selectedTab: 'home' })}>
          {homeView}
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'profile'}
          title="Profile"
          renderIcon={() => <Image source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} />}
          renderSelectedIcon={() => <Image source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} />}
          renderBadge={() => <CustomBadgeView />}
          onPress={() => this.setState({ selectedTab: 'profile' })}>
          {profileView}
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TabNavigatorTest', () => TabNavigatorTest);
