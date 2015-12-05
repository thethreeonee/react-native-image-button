"use strict";

import React from "react-native";

let {
  Image,
  StyleSheet,
  View,
} = React;

export default class ImageButton extends React.Component {
  constructor(props: {}) {
    super(props);

    this.state = {
      image: this.props.appearance.normal
    };
  }

  onTouchStart() {
    this.setState({
      image: this.props.appearance.highlight
    });
  }

  onTouchEnd() {
    this.setState({
      image: this.props.appearance.normal
    }, () => {
      if (this.props.onPress) {
        setTimeout(this.props.onPress);
      }
    });
  }

  onTouchCancel() {
    this.setState({
      image: this.props.appearance.normal
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      image: nextProps.appearance.normal
    });
  }

  render() {
    return (
      <View style={ this.props.style }
            onStartShouldSetResponder={ () => true }
            onResponderGrant={ this.onTouchStart.bind(this) }
            onResponderRelease={ this.onTouchEnd.bind(this) }
            onResponderTerminate={ this.onTouchCancel.bind(this) }
            onResponderReject={ this.onTouchCancel.bind(this) }>
        <Image style={ styles.image } source={ this.state.image } resizeMode="stretch" />
      </View>
    );
  }
}

let styles = StyleSheet.create({
  image: {
    flex: 1,
    width: null,
    height: null
  }
});
