import React from 'react';
import PropTypes from 'prop-types';
import { requireNativeComponent, ViewPropTypes } from 'react-native';

const iface = {
    name: 'NativeWaveAnimation',
    propTypes: {
        ...ViewPropTypes,
        percent: PropTypes.number,
        frontWaveColor: PropTypes.string,
        behindWaveColor: PropTypes.string,
    },
}

export default requireNativeComponent('WaveAnimationView', iface);