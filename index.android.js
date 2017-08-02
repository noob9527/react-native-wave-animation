import React from 'react';
import PropTypes from 'prop-types';
import { View, requireNativeComponent, ViewPropTypes } from 'react-native';

export const ShapeType = {
    CIRCLE: 0,
    SQUARE: 1,
}

class WaveAnimation extends React.Component {
    static propTypes = {
        ...ViewPropTypes,
        shapeType: PropTypes.oneOf([ShapeType.CIRCLE, ShapeType.SQUARE]),
    }

    static defaultProps = {
        shapeType: ShapeType.SQUARE,
    }

    render() {
        const {
            children,
            style,
            shapeType,
        } = this.props;

        return (
            <View style={style}>
                <RctWaveAnimation 
                    shapeType={shapeType}
                    style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}} />
                {children}
            </View>
        );
    }
}

const RctWaveAnimation = requireNativeComponent(
    'RCTWaveAnimation',
    null,
)

export default WaveAnimation;