# React Native Image Button

## Usage

```javascript

import React from 'react';
import ImageButton from 'react-native-img-button';
import {
  Dimensions,
  NetInfo,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class Main extends React.Component {
  onPressButton() {
    console.log("Pressed!");
  }
  
  render() {
    return (
      <View style={ styles.container }>
        <ImageButton
          style={ styles.btn }
          appearance={ {
            normal: require("btn_normal.png"),
            highlight: require("btn_normal_pressed.png")
          } }
          onPress={ this.onPressButton }/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    width: 50,
    height: 50,
  },
});
```
