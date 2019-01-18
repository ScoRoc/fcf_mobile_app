import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default class LoadingScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //
    }
  }

  componentDidMount() {
    setTimeout(() => this.props.navigation.navigate('Auth'), 1500);
  }

  render() {
    return (
      <View style={styles.view}>
        <Text>loading screen</Text>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
  },
});
