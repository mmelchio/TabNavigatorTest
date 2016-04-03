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
  View
} from 'react-native';

class TabNavigatorTest extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="Home"
            renderIcon={() => <Image source={uri: {'https://facebook.github.io/react/img/logo_og.png'}} />}
            renderSelectedIcon={() => <Image source={uri: {'https://facebook.github.io/react/img/logo_og.png'}} />}
            badgeText="1"
            onPress={() => this.setState({ selectedTab: 'home' })}>
            {homeView}
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'profile'}
            title="Profile"
            renderIcon={() => <Image source={uri: {'https://facebook.github.io/react/img/logo_og.png'}} />}
            renderSelectedIcon={() => <Image source={uri: {'https://facebook.github.io/react/img/logo_og.png'}} />}
            renderBadge={() => <CustomBadgeView />}
            onPress={() => this.setState({ selectedTab: 'profile' })}>
            {profileView}
          </TabNavigator.Item>
        </TabNavigator>
      </View>
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
