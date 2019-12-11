import React, { Component } from "react";
import PropTypes from "prop-types";

import { Input } from "native-base";

class SuperTextInput extends Component {
  constructor() {
    super();
    this.state = {
      timeout: null
    };
  }

  render() {
    let { onPauseText, pauseDelay, onChangeText } = this.props;
    let { timeout } = this.state;
    return (
      <Input
        {...this.props}
        onChangeText={text => {
          if (onPauseText) {
            if (timeout) window.clearTimeout(timeout);
            timeout = window.setTimeout(() => onPauseText(), pauseDelay);
            this.setState({ timeout });
          }
          if (onChangeText) onChangeText(text);
        }}
      />
    );
  }
}

SuperTextInput.propTypes = {
  onPauseText: PropTypes.func,
  pauseDelay: PropTypes.number
};

SuperTextInput.defaultProps = {
  pauseDelay: 500
};

module.exports = SuperTextInput;
