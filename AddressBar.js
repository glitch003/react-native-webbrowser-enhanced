
'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import {
        TextInput,
        View,
        Image
        } from 'react-native'

import BaseComponent from './BaseComponent'
import Utils from './Utils'
import styles from './styles'
import Button from './Button'

const TEXT_INPUT_REF = 'urlInput'

class AddressBar extends BaseComponent {
  constructor (props) {
    super(props)

    this.inputText = ''

    let toolbarState = AddressBar.updateState(this.props)
    this.state = {
      url: this.props.url,
      ...toolbarState
    }

    this._bind(
                'handleTextInputChange',
                'onSubmitEditing'
        )
  }

  static updateState (props) {
    return {
      backButtonEnabled: props.backButtonEnabled,
      forwardButtonEnabled: props.forwardButtonEnabled,
      homeButtonEnabled: props.homeButtonEnabled,
      onBack: props.onBack,
      onHome: props.onHome,
      onForward: props.onForward
    }
  }

  componentWillReceiveProps (nextProps) {
    let toolbarState = AddressBar.updateState(this.props)
    this.setState({
      url: nextProps.url,
      ...toolbarState
    })
  }

  handleTextInputChange (event) {
    const url = Utils.sanitizeUrl(event.nativeEvent.text)
    this.inputText = url
  }

  onSubmitEditing (event) {
    this.load()
  }

  load () {
    const url = this.inputText
    if (url === this.props.url) {
      this.props.onReload()
    } else {
      this.props.onLoad(url)
    }
        // dismiss keyboard
    this.refs[TEXT_INPUT_REF].blur()
  }

  buttonStyle () {
    return [styles.toolBarIcons, this.props.foregroundColor && {tintColor: this.props.foregroundColor}]
  }

  render () {
    return (
      <View style={[styles.addressBarRow]}>
        <TextInput
          ref={TEXT_INPUT_REF}
          autoCapitalize='none'
          autoCorrect={false}
          defaultValue={this.state.url}
          onSubmitEditing={this.onSubmitEditing}
          onChange={this.handleTextInputChange}
          clearButtonMode='while-editing'
          underlineColorAndroid='white'
          style={[styles.addressBarTextInput, this.props.inputColor && {color: this.props.inputColor}]}
                            />
        <View style={{marginLeft: 10, flexDirection: 'row', alignItems: 'flex-end'}}>
          <Button
            disabled={!this.state.backButtonEnabled}
            onPress={this.state.onBack}>
            <Image
              style={this.buttonStyle()}
              source={require('./assets/images/arrow-left.png')}
                                />
          </Button>

          <Button
            disabled={!this.state.forwardButtonEnabled}
            onPress={this.state.onForward}>
            <Image
              style={this.buttonStyle()}
              source={require('./assets/images/arrow-right.png')}
                                />
          </Button>
        </View>
      </View>
    )
  }
}

AddressBar.propTypes = {
  url: PropTypes.string,
  onLoad: PropTypes.func,
  onReload: PropTypes.func,
  foregroundColor: PropTypes.string,
  inputColor: PropTypes.string
}

AddressBar.defaultProps = {
  url: '',
  onLoad: (url) => {},
  onReload: () => {}
}

module.exports = AddressBar
