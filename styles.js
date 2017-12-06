import { StyleSheet, Platform } from 'react-native'

const HEADER = '#3b5998'
const BGWASH = 'rgba(255,255,255,1)'
const ELEMENT_MARGIN = 8
const SHADOW_COLOR = '#333'
const SHADOW_OPACITY = 0.4
const SHADOW_RADIUS = 1

const isAndroid = function () {
  return Platform.OS === 'android'
}

const isIOS = function () {
  return Platform.OS === 'ios'
}

let styleobj = {
  container: {
    flex: 1,
    backgroundColor: HEADER
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    transform: [{'translate': [0, 0, 1]}], /* bring view to front */
    shadowColor: SHADOW_COLOR,
    shadowOpacity: SHADOW_OPACITY,
    shadowRadius: SHADOW_RADIUS,
    shadowOffset: { height: 1, width: 0 }
  },

  addressBarRow: {
    flexDirection: 'row',
    marginTop: ELEMENT_MARGIN / 2,
    marginBottom: ELEMENT_MARGIN / 2,
    marginLeft: ELEMENT_MARGIN,
    marginRight: ELEMENT_MARGIN
  },
  webView: {
    backgroundColor: BGWASH,
    height: 350
  },
  addressBarTextInput: {
    backgroundColor: 'white',
    borderRadius: 3,
    height: isAndroid() ? 40 : 35,
    paddingLeft: 10,
    flex: 1,
    fontSize: 14,
    paddingTop: isAndroid() ? 10 : 0,
    marginBottom: 5
  },
  navButton: {
    width: 20,
    padding: 3,
    marginRight: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: BGWASH,
    borderColor: 'transparent',
    borderRadius: 3
  },
  statusBar: {
    marginLeft: ELEMENT_MARGIN,
    marginRight: ELEMENT_MARGIN,
    height: 35
  },
  statusBarText: {
    flex: 1,
    color: 'white',
    fontSize: 14,
    textAlign: 'center'
  },
  spinner: {
    width: 20,
    marginRight: 6
  },

  toolBar: {
    shadowColor: SHADOW_COLOR,
    shadowOpacity: SHADOW_OPACITY,
    shadowRadius: SHADOW_RADIUS,
    shadowOffset: { height: 0, width: 0 },
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: isAndroid() ? 5 : ELEMENT_MARGIN,
    paddingBottom: isAndroid() ? 20 : ELEMENT_MARGIN
  },

  toolBarIcons: {
    width: 50,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    opacity: 1
  }
}

if (isIOS()) {
  styleobj['toolBarIcons'] = {
    width: 30,
    height: 30,
    opacity: 1
  }
}

export default StyleSheet.create(styleobj)
