import React from 'react';
import PropTypes from 'prop-types';
import { requireNativeComponent, ViewProptypes } from 'react-native';

const iface = {
    name: 'NativeWaveAnimation',
    propTypes: {
        ...ViewProptypes,
        percent: PropTypes.number,
        frontWaveColor: PropTypes.string,
        behindWaveColor: PropTypes.string,
    },
    defaultProps: {
        active: true,
    }
}

export default requireNativeComponent('WaveAnimationView', iface);